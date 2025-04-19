import express from "express";
import passport from "passport";

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
