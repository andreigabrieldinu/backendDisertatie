import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import prisma from "../prisma/prismaClient.js";
import { sendMail } from "../controllers/sendReset.js";

const saltRounds = 10;
const utilizatorRouter = express.Router();

async function esteUtilizatorAdmin(req, res, next) {
  console.log(req.user);

  try {
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
  } catch (error) {
    console.log(error);
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
    res.sendStatus(401);
  }
}

const updateLegareCompanie = async (id, idcompanie) => {
  let utilizator = null;
  try {
    let companie = await prisma.companie.findUnique({
      where: { idcompanie: idcompanie },
    });
    if (!companie) {
      return "Compania nu exista";
    }

    let subscriptie = await prisma.subscriptie.findFirst({
      where: {
        tip: companie.tipsubscriptie,
      },
    });

    let countUtilizatoriPeCompanie = await prisma.utilizator.groupBy({
      by: ["idcompanie"],
      where: {
        idcompanie: companie.idcompanie,
      },
      _count: {
        idcompanie: true,
      },
    });

    if (
      subscriptie.numarmaximutilizatori >
      countUtilizatoriPeCompanie[0]._count.idcompanie
    ) {
      utilizator = await prisma.utilizator.update({
        where: { idutilizator: id },
        data: {
          idcompanie: companie.idcompanie,
        },
      });
    } else {
      return "Numarul maxim de utilizatori pentru aceasta companie a fost atins";
    }
  } catch (error) {
    console.log(error);
  }
  return utilizator;
};

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
          tichetValidareDeschis: false,
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
      if (req.user.message === "Utilizator sau parola gresita") {
        res.status(401).send({ message: "Utilizator sau parola gresite" });
      } else {
        res.status(200).send({
          idutilizator: req.user.idutilizator,
          email: req.user.email,
          nume: req.user.nume,
          prenume: req.user.prenume,
          pozaprofil: req.user.pozaprofil,
          idcompanie: req.user.idcompanie,
          tichetValidareDeschis: req.user.tichetValidareDeschis,
          tipUtilizator: req.user.tiputilizator,
          specializare: req.user.specializare,
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

utilizatorRouter.get("/", esteUtilizatorAdmin, async (req, res) => {
  try {
    const utilizatori = await prisma.utilizator.findMany();

    if (!utilizatori || utilizatori.length === 0) {
      return res.status(404).send({ message: "Nu exista utilizatori" });
    }
    let utilizatoriToSend = [];
    for (let utilizator of utilizatori) {
      let utilizatorToSend = {
        id: utilizator.idutilizator,
        email: utilizator.email,
        nume: utilizator.nume,
        prenume: utilizator.prenume,
        pozaprofil: utilizator.pozaprofil,
        idcompanie: utilizator.idcompanie,
        tichetValidareDeschis: utilizator.tichetValidareDeschis,
        tipUtilizator: utilizator.tiputilizator,
        specializare: utilizator.specializare,
        datacreare: utilizator.datacreare.toISOString().substring(0, 10),
      };
      utilizatoriToSend.push(utilizatorToSend);
    }

    res.status(200).send(utilizatoriToSend);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

utilizatorRouter.get(
  "/auth/status",
  esteUtilizatorClientSauAdmin,
  (req, res) => {
    let dataCreare = req.user.datacreare;

    if (req.user) {
      let userToSend = {
        idutilizator: req.user.idutilizator,
        email: req.user.email,
        nume: req.user.nume,
        prenume: req.user.prenume,
        pozaprofil: req.user.pozaprofil,
        idcompanie: req.user.idcompanie,
        tichetValidareDeschis: req.user.tichetValidareDeschis,
        tipUtilizator: req.user.tiputilizator,
        specializare: req.user.specializare,
        datacreare: dataCreare.substring(0, 10),
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
    successRedirect: `${process.env.FRONTEND_URL}`,
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

utilizatorRouter.patch(
  "/:id/legareCompanie",
  esteUtilizatorAdmin,
  async (req, res) => {
    const { id } = { ...req.params };
    const { idcompanie } = { ...req.body };

    try {
      let utilizator = await updateLegareCompanie(
        Number(id),
        Number(idcompanie)
      );
      if (utilizator === "Compania nu exista") {
        res.status(404).send({ message: "Compania nu exista" });
      } else if (
        utilizator ===
        "Numarul maxim de utilizatori pentru aceasta companie a fost atins"
      ) {
        res.status(409).send({
          message: `Numarul maxim de utilizatori pentru aceasta companie a fost atins`,
        });
      } else {
        {
          res.status(200).send({
            message: `Utilizatorul a fost asignat companiei "${idcompanie}"`,
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

const updateLegareSpecializareSiAdmin = async (id, specializare) => {
  let utilizator = null;
  try {
    const specializareDB = await prisma.specializare.findFirst({
      where: { idspecializare: specializare },
    });
    if (!specializareDB) {
      return "Specializarea nu exista.";
    }
    utilizator = await prisma.utilizator.update({
      where: {
        idutilizator: id,
      },
      data: {
        tiputilizator: "admin",
        specializare: specializareDB.idspecializare,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return utilizator;
};

utilizatorRouter.patch(
  "/:id/legareSpecializare",
  esteUtilizatorAdmin,
  async (req, res) => {
    const { id } = { ...req.params };
    const { specializare } = { ...req.body };
    try {
      const user = await updateLegareSpecializareSiAdmin(
        Number(id),
        specializare
      );
      if (user === "Specializarea nu exista.") {
        res.status(404).send({ message: "Specializarea nu exista." });
      } else {
        res.status(200).send({
          message: `Specializarea ${specializare} a fost asignata contului `,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

utilizatorRouter.delete("/:id", esteUtilizatorAdmin, async (req, res) => {
  const { id } = { ...req.params };

  try {
    if (!id || isNaN(Number(id))) {
      return res.status(400).send({ message: "ID-ul nu este valid" });
    }
    let tichet = await prisma.tichet.findFirst({
      where: { idutilizator: Number(id) },
    });
    let utilizator = null;
    if (!tichet) {
      utilizator = await prisma.utilizator.delete({
        where: { idutilizator: Number(id) },
      });
    } else {
      await prisma.istorictichet.deleteMany({
        where: { idtichet: Number(tichet.idtichet) },
      });
      await prisma.mesaje.deleteMany({
        where: { idtichet: Number(tichet.idtichet) },
      });
      await prisma.tichet.deleteMany({
        where: { idutilizator: Number(id) },
      });
      utilizator = await prisma.utilizator.delete({
        where: { idutilizator: Number(id) },
      });
    }
    res.status(200).send(utilizator);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

const genereazaTokenResetareParola = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

utilizatorRouter.post("/genereazaToken", async (req, res) => {
  const { email } = { ...req.body };
  try {
    const utilizator = await prisma.utilizator.findUnique({
      where: { email: email },
    });
    if (!utilizator) {
      return res.status(404).send({ message: "Utilizatorul nu exista" });
    }
    // Logic for generating token would go here
    const token = genereazaTokenResetareParola();

    const resetLink = `${process.env.FRONTEND_URL}/resetareParola/${token}`;
    const mesaj = `
Salut,
Pentru a reseta parola, accesați următorul link:
${resetLink}
`;
    await sendMail(
      email,
      `Resetare Parola Support Easy pentru ${email}`,
      mesaj
    );

    await prisma.utilizator.update({
      where: { email: email },
      data: {
        tokenResetareParola: token,
        tokenResetareParolaExpirare: new Date(Date.now() + 3600000), // Token valid for 1 hour
      },
    });

    res.status(200).send({
      message: "Link pentru resetare parola trimis la email-ul introdus.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

utilizatorRouter.post("/resetareParola/:token", async (req, res) => {
  const { parola } = { ...req.body };
  let { token } = { ...req.params };
  console.log(token);
  try {
    const utilizator = await prisma.utilizator.findFirstOrThrow({
      where: { tokenResetareParola: token },
    });
    if (!utilizator) {
      return res.status(404).send({ message: "Utilizatorul nu exista" });
    }
    // Logic for sending reset password email would go here
    if (
      !utilizator.tokenResetareParolaExpirare ||
      utilizator.tokenResetareParolaExpirare < new Date(Date.now())
    ) {
      return res.status(400).send({ message: "Tokenul de resetare a expirat" });
    }
    let hashedParola = bcrypt.hashSync(parola, saltRounds);

    await prisma.utilizator.update({
      where: { idutilizator: utilizator.idutilizator },
      data: {
        modalitatelogare: hashedParola,
        tokenResetareParola: null,
        tokenResetareParolaExpirare: null,
      },
    });
    res.status(200).send({
      message: "Parola a fost resetata cu succes.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export { utilizatorRouter, esteUtilizatorClientSauAdmin, esteUtilizatorAdmin };
