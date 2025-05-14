import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";
import { getSubscriptie } from "./subscriptie.js";

const tichetRouter = express.Router();

// constrangere companie activa constrangere tichet validare
//tipTichet - client (daca e deschis de client), consult (daca e deschis de admin)
//dataCreare- today
//statusCurent - nou, asignat, in progres, asteptare raspuns client, consult deschis, inchis
//consultDeschis - numar tichet
//bugDeschis - true/false
//escalat - true/false
//idSuport - asignee
//idUtilizator - creator tichet
//link docs

const getAdminTicheteMinime = async (specializare) => {
  let utilizatoriPeSpecializare = await prisma.utilizator.findMany({
    where: { specializare: specializare },
  });
  let counts = [];
  for (let userSpec of utilizatoriPeSpecializare) {
    let nrTicheteActive = await prisma.tichet.groupBy({
      by: ["idsuport"],
      where: {
        idstatus: {
          in: [1, 2, 3, 4, 5, 6, 13],
        },
        AND: {
          idsuport: userSpec.idutilizator,
        },
      },
      _count: {
        idtichet: true,
      },
    });

    counts.push({
      idsuport: userSpec.idutilizator,
      nrTicheteActive: nrTicheteActive[0]
        ? nrTicheteActive[0]._count.idtichet
        : 0,
    });
  }
  let minimum = counts.reduce((min, current) =>
    current.nrTicheteActive < min.nrTicheteActive ? current : min
  );
  return minimum.idsuport;
};

const insertTichet = async (
  titlu,
  prioritate,
  produs,
  notite,
  specializare,
  user
) => {
  let tichet = null;

  try {
    //daca tichet de validare nu a fost deschis
    if (
      user.tichetValidareDeschis === false &&
      user.tiputilizator === "client"
    ) {
      let tipTichet = user.tiputilizator;
      let dataCreare = new Date().toISOString();
      let idstatus = 4; // Caz nou
      let idSuport = await getAdminTicheteMinime(specializare);
      let timpPtRaspuns = new Date();
      timpPtRaspuns.setHours(timpPtRaspuns.getHours() + 11);
      let data = {
        titlu: titlu,
        tiptichet: tipTichet,
        prioritate: prioritate,
        datacreare: dataCreare,
        consultdeschis: false,
        bugdeschis: false,
        produs: produs,
        escalat: false,
        idsuport: idSuport,
        idutilizator: user.idutilizator,
        notite: notite,
        idspecializare: specializare,
        idstatus: idstatus,
        timpPentruRaspuns: timpPtRaspuns,
      };
      await prisma.tichet.create({ data: data });
      await prisma.utilizator.update({
        where: {
          idutilizator: user.idutilizator,
        },
        data: {
          tichetValidareDeschis: true,
        },
      });
      return "Tichetul a fost creat cu succes cu detaliile primite";
    } else if (
      (user.idcompanie &&
        user.tichetValidareDeschis &&
        user.tiputilizator === "client") ||
      user.tiputilizator === "admin"
    ) {
      const companie = await prisma.companie.findUnique({
        where: {
          idcompanie: user.idcompanie,
        },
      });
      if (companie.status === "activ") {
        const subscriptie = await getSubscriptie(companie.tipsubscriptie);
        let tipTichet = user.tiputilizator;
        let dataCreare = new Date().toISOString();
        let idstatus = 4; // Caz nou
        let idSuport = await getAdminTicheteMinime(specializare);
        let timpPtRaspuns = new Date();
        timpPtRaspuns.setHours(timpPtRaspuns.getHours() + 3);
        let timpP1;
        switch (prioritate) {
          case "P1":
            timpP1 = Number(subscriptie.p1.substring(0, 1));
            timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);

            break;
          case "P2":
            if (subscriptie.tip === "Gold" || subscriptie.tip === "Platinum") {
              timpP1 = Number(subscriptie.p2.substring(0, 1));
              timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);
            } else {
              timpP1 = Number(subscriptie.p2.substring(0, 2));
              timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);
            }
            break;
          case "P3":
            if (subscriptie.tip === "Bronze" || subscriptie.tip === "Silver") {
              timpP1 = Number(subscriptie.p3, substring(0, 1));
              timpPtRaspuns.setDate(timpPtRaspuns.getDate() + timpP1);
            } else {
              timpP1 = Number(subscriptie.p3.substring(0, 2));
              timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);
            }
            break;
          default:
            switch (subscriptie.tip) {
              case "Gold":
                timpP1 = Number(subscriptie.p4.substring(0, 2));
                timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);

                break;
              case "Platinum":
                timpP1 = Number(subscriptie.p4.substring(0, 1));
                timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);

              default:
                timpP1 = Number(subscriptie.p4.substring(0, 1));
                timpPtRaspuns.setDate(timpPtRaspuns.getDate() + timpP1);
                break;
            }
        }
        let data = {
          titlu: titlu,
          tiptichet: tipTichet,
          prioritate: prioritate,
          datacreare: dataCreare,
          consultdeschis: false,
          bugdeschis: false,
          produs: produs,
          escalat: false,
          idsuport: idSuport,
          idutilizator: user.idutilizator,
          notite: notite,
          idspecializare: specializare,
          idstatus: idstatus,
          timpPentruRaspuns: timpPtRaspuns,
        };
        let istoicTichet = await prisma.tichet.create({ data: data });
        await prisma.istorictichet.create({
          data: {
            idtichet: istoicTichet.idtichet,
            datacreare: dataCreare,
            modificare: `Caz deschis de ${user.email}`,
          },
        });
        return "Tichetul a fost creat cu succes cu detaliile primite";
      }
    } else {
      return "Clientul nu a fost validat.";
    }
  } catch (error) {
    console.log(error);
  }

  return tichet;
};

const getAllTichete = async () => {
  return await prisma.tichet.findMany();
};

const getTichet = async (user, idtichet) => {
  let tichet = null;
  try {
    tichet = await prisma.tichet.findUnique({
      where: {
        idtichet: Number(idtichet),
      },
    });
    if (
      user.tiputilizator === "client" &&
      tichet.idutilizator === user.idutilizator
    ) {
      let numeStatus = await prisma.statustichete.findFirst({
        where: { idstatus: tichet.idstatus },
      });
      let numeSpecializare = await prisma.specializare.findFirst({
        where: { idspecializare: tichet.idspecializare },
      });

      let tichetDeTrimis = {
        idtichet: tichet.idtichet,
        titlu: tichet.titlu,
        prioritate: tichet.prioritate,
        datacreare: tichet.datacreare,
        produs: tichet.produs,
        escalat: tichet.escalat,
        notite: tichet.notite,
        status: numeStatus.nume,
        specializare: numeSpecializare.nume,
      };
      return tichetDeTrimis;
    } else if (user.tiputilizator === "admin") {
      return tichet;
    } else {
      return "Utilizatorul poate vedea doar propriile tichete.";
    }
  } catch (error) {
    console.log(error);
  }
};

const getTicheteleMele = async (user) => {
  let tichete = null;
  try {
    if (user.tiputilizator === "admin") {
      tichete = await prisma.tichet.findMany({
        where: {
          idsuport: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [1, 2, 3, 4, 5, 6, 13],
            },
          },
        },
      });
      return tichete;
    } else if (user.tiputilizator === "client") {
      tichete = await prisma.tichet.findMany({
        where: {
          idutilizator: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [1, 2, 3, 4, 5, 6, 13],
            },
          },
        },
      });
      let ticheteNoi = [];
      for (let tichet of tichete) {
        let numeStatus = await prisma.statustichete.findUnique({
          where: { idstatus: tichet.idstatus },
        });
        let numeSpecializare = await prisma.specializare.findUnique({
          where: {
            idspecializare: tichet.idspecializare,
          },
        });
        let tichetDeTrimis = {
          idtichet: tichet.idtichet,
          titlu: tichet.titlu,
          prioritate: tichet.prioritate,
          datacreare: tichet.datacreare,
          produs: tichet.produs,
          escalat: tichet.escalat,
          notite: tichet.notite,
          status: numeStatus.nume,
          specializare: numeSpecializare.nume,
        };
        ticheteNoi.push(tichetDeTrimis);
      }
      return ticheteNoi;
    } else {
      return "Utilizatorul nu are tichete.";
    }
  } catch (error) {
    console.log(error);
  }
};

const insertIstoricTichet = async (idtichet, modificare) => {
  try {
    await prisma.istorictichet.create({
      data: {
        idtichet: idtichet,
        modificare: modificare,
        datacreare: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTichet = async (idtichet, user, body) => {
  let tichet = null;
  try {
    if (
      user.tiputilizator === "client" &&
      body.bugdeschis === undefined &&
      body.consultdeschis === undefined
    ) {
      if (body.prioritate) {
        await insertIstoricTichet(
          idtichet,
          `Tichetul ${idtichet} a fost reprioritizat la ${body.prioritate} de ${user.email}.`
        );
      }
      if (body.escalat) {
        await insertIstoricTichet(
          idtichet,
          `Tichetul ${idtichet} a fost escalat de catre ${user.email}.`
        );
      }
      if (body.idsuport) {
        let suport = await prisma.utilizator.findUnique({
          where: { idutilizator: body.idsuport },
        });
        await insertIstoricTichet(
          idtichet,
          `Tichetul ${idtichet} a fost asignat pe ${suport.email}.`
        );
      }
      if (body.idstatus) {
        let status = await prisma.statustichete.findUnique({
          where: { idstatus: body.idstatus },
        });
        await insertIstoricTichet(
          idtichet,
          `Statusul tichetului ${idtichet} a fost modificat in ${status.nume} de catre ${user.email}.`
        );
      }
      tichet = await prisma.tichet.update({
        where: { idtichet: idtichet },
        data: body,
      });
    } else if (user.tiputilizator === "admin") {
      if (body.consultdeschis) {
        await insertIstoricTichet(
          idtichet,
          `Tichetului ${idtichet} i-a fost deschis consult de catre ${user.email}.`
        );
      }
      if (body.bugdeschis) {
        await insertIstoricTichet(
          idtichet,
          `Tichetului ${idtichet} i-a fost deschis bug de catre ${user.email}.`
        );
      }
      if (body.prioritate) {
        await insertIstoricTichet(
          idtichet,
          `Tichetul ${idtichet} a fost reprioritizat la ${body.prioritate} de ${user.email}.`
        );
      }
      tichet = await prisma.tichet.update({
        where: { idtichet: idtichet },
        data: body,
      });
    } else {
      return "Aceasta operatiune nu este permisa pentru clienti.";
    }
    return tichet;
  } catch (error) {
    console.log(error);
  }
};

tichetRouter.post("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  const { titlu, prioritate, produs, notite, specializare } = { ...req.body };
  const user = req.user;

  try {
    let tichet = await insertTichet(
      titlu,
      prioritate,
      produs,
      notite,
      specializare,
      user
    );
    switch (tichet) {
      case "Tichetul a fost creat cu succes cu detaliile primite":
        res.status(200).send({
          message: "Tichetul a fost creat cu succes cu detaliile primite",
        });
        break;
      case "Compania este setata ca inactiva.":
        res.status(409).send({ message: "Compania este setata ca inactiva." });
        break;
      case "Clientul nu a fost validat.":
        res.status(409).send({ message: "Clientul nu a fost validat." });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

tichetRouter.get("/", esteUtilizatorAdmin, async (req, res) => {
  try {
    let tichete = await getAllTichete();
    res.status(200).send(tichete);
  } catch (error) {
    res.status(500).send(error);
  }
});

tichetRouter.get(
  "/:idtichet",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    const { idtichet } = { ...req.params };
    const { user } = { ...req };
    try {
      const tichet = await getTichet(user, idtichet);
      if (tichet === "Utilizatorul poate vedea doar propriile tichete.") {
        res.status(403).send({
          message: "Utilizatorul poate vedea doar propriile tichete.",
        });
      } else {
        res.status(200).send({ tichet });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

tichetRouter.get(
  "/ticheteleMele/active",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    const { user } = { ...req };
    try {
      const tichet = await getTicheteleMele(user);
      if (tichet === "Utilizatorul nu are tichete.") {
        res.status(404).send({
          message: "Utilizatorul nu are tichete.",
        });
      } else {
        res.status(200).send({ tichet });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

tichetRouter.patch(
  "/:idtichet",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const { body } = { ...req };
      const tichet = await updateTichet(Number(idtichet), user, body);
      if (tichet) {
        res
          .status(200)
          .send({ message: "Tichetul a fost actualizat cu succes." });
      } else {
        res.status(403).send({
          message: "Aceasta operatiune nu este permisa pentru clienti.",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { tichetRouter };
