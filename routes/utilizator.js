import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import prisma from "../prisma/prismaClient.js";

const saltRounds = 10;
const utilizatorRouter = express.Router();

function esteUtilizatorAdmin(req, res, next) {
  if (req.user) {
    if (req.user.tiputilizator === "admin") {
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
}

function esteUtilizatorClientSauAdmin(req, res, next) {
  if (req.user) {
    if (
      req.user.tiputilizator === "client" ||
      req.user.tiputilizator === "admin"
    ) {
      next();
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
}

utilizatorRouter.get(
  "/google/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

utilizatorRouter.post("/inregistrare", async (req, res) => {
  try {
    const { email, nume, prenume, parola } = { ...req.body };
    let user = await prisma.utilizator.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      let hashedParola = bcrypt.hashSync(parola, saltRounds);
      const tipUtilizator = "client";
      const pozaprofil = "N/A";
      const data = new Date().toISOString();

      await prisma.utilizator.create({
        data: {
          email: email,
          nume: nume,
          prenume: prenume,
          modalitatelogare: hashedParola,
          pozaprofil: pozaprofil,
          datacreare: data,
          tiputilizator: tipUtilizator,
        },
      });
      res.status(201).send({ message: "Utilizatorul a fost inregistrat" });
    } else {
      res.status(409).send({ message: "Utilizatorul deja exista" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

utilizatorRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send({ message: "Utilizator logat cu succes." });
});

utilizatorRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/v1/user/protected",
    failureRedirect: "/api/v1/user/failure",
  })
);

utilizatorRouter.get("/failure", (req, res) => {
  res.send("something went wrong");
});

utilizatorRouter.get("/protected", esteUtilizatorClientSauAdmin, (req, res) => {
  res.send(`Hello, ${req.user.nume} ${req.user.prenume}`);
});

utilizatorRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.redirect("/");
  });
});

export { utilizatorRouter, esteUtilizatorClientSauAdmin, esteUtilizatorAdmin };
