import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import prisma from "../prisma/prismaClient.js";

const saltRounds = 10;
const utilizatorRouter = express.Router();

async function esteUtilizatorAdmin(req, res, next) {
  if (!req.user.message) {
    if (req.user.tiputilizator === "admin") {
      const userDinDB = await prisma.utilizator.findFirst({
        where: {
          idutilizator: req.user.idutilizator,
        },
      });
      if (userDinDB.IdSessiune !== req.user.IdSessiune) {
        res.sendStatus(401);
      } else {
        next();
      }
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
}

async function esteUtilizatorClientSauAdmin(req, res, next) {
  try {
    if (!req.user.message) {
      if (
        req.user.tiputilizator === "client" ||
        req.user.tiputilizator === "admin"
      ) {
        const userDinDB = await prisma.utilizator.findFirst({
          where: {
            idutilizator: req.user.idutilizator,
          },
        });
        if (userDinDB.IdSessiune !== req.user.IdSessiune) {
          res.sendStatus(401);
        } else {
          next();
        }
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    req.sesiuneExipirata = true;
    next();
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

async function updateSesiune(req, res, next) {
  console.log("USER", req.user);

  try {
    if (req.user) {
      let oldUser = await prisma.utilizator.findFirst({
        where: {
          idutilizator: req.user.idutilizator,
        },
      });
      let newCookieTime = req.session.cookie._expires;
      newCookieTime.setHours(newCookieTime.getHours() + 3);
      if (
        oldUser.timpAbsolutExpirareSesiune ||
        oldUser.timpAbsolutExpirareSesiune < newCookieTime
      ) {
        oldUser = await prisma.utilizator.update({
          where: {
            idutilizator: oldUser.idutilizator,
          },
          data: {
            IdSessiune: req.sessionID,
            timpAbsolutExpirareSesiune: newCookieTime,
          },
        });
        req.user.IdSessiune = oldUser.IdSessiune;
        req.user.timpAbsolutExpirareSesiune = newCookieTime;
      }
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
}

utilizatorRouter.post(
  "/login",
  passport.authenticate("local"),
  updateSesiune,
  async (req, res) => {
    try {
      console.log("DIN REQ", req.user.message);
      if (req.user.message === "Utilizator sau parola gresita") {
        res.status(401).send({ message: "Utilizator sau parola gresite" });
      } else {
        res.status(200).send({ message: "Utilizator logat cu succes." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

utilizatorRouter.get(
  "/auth/status",
  esteUtilizatorClientSauAdmin,
  (req, res) => {
    if (req.user) {
      let userToSend = {
        idutilizator: req.user.idutilizator,
        email: req.user.email,
        nume: req.user.nume,
        prenume: req.user.prenume,
        pozaprofil: req.user.pozaprofil,
        idcompanie: req.user.idcompanie,
      };
      res.status(200).send(userToSend);
    } else {
      res.status(401).send({ message: "Utilizatorul nu e autentificat" });
    }
  }
);

utilizatorRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5000/acasa",
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
  });
  res.status(200).send({ message: "Utilizatorul a fost deconectat" });
});

export { utilizatorRouter, esteUtilizatorClientSauAdmin, esteUtilizatorAdmin };
