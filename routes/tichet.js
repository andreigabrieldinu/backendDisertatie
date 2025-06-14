import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";
import { getSubscriptie } from "./subscriptie.js";
import { getIstoricTichet } from "./istoricTichet.js";

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
          in: [1, 2, 4, 5, 6],
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

const insertTichet = async (
  titlu,
  prioritate,
  produs,
  notite,
  specializare,
  user
) => {
  let tichet = null;
  if (!titlu || !prioritate || !produs || !specializare) {
    return "Tichetul nu a fost creat, lipsesc date pentru completare";
  }
  try {
    //daca tichet de validare nu a fost deschis
    if (
      user.tichetValidareDeschis === false &&
      user.tiputilizator === "client"
    ) {
      let utilizator = await prisma.utilizator.findUnique({
        where: {
          idutilizator: user.idutilizator,
        },
      });
      if (
        utilizator.tichetValidareDeschis === true &&
        user.tichetValidareDeschis === false
      ) {
        return "Clientului nu i-a fost asignata o companie.";
      }
      let tipTichet = user.tiputilizator;
      let dataCreare = new Date().toISOString();
      let idstatus = 3; // Caz nou
      let idSuport = await getAdminTicheteMinime(specializare);
      let timpPtRaspuns = new Date();
      timpPtRaspuns.setHours(timpPtRaspuns.getHours() + 11);
      let data = {
        titlu: titlu,
        tiptichet: tipTichet,
        prioritate: prioritate,
        datacreare: dataCreare,
        produs: produs,
        escalat: false,
        idsuport: idSuport,
        idutilizator: user.idutilizator,
        notite: notite,
        idspecializare: specializare,
        idstatus: idstatus,
        timpPentruRaspuns: timpPtRaspuns,
      };
      let tichet = await prisma.tichet.create({ data: data });
      await prisma.utilizator.update({
        where: {
          idutilizator: user.idutilizator,
        },
        data: {
          tichetValidareDeschis: true,
        },
      });
      const suport = await prisma.utilizator.findUnique({
        where: { idutilizator: idSuport },
      });
      await prisma.istorictichet.create({
        data: {
          idtichet: tichet.idtichet,
          datacreare: dataCreare,
          modificare: `Tichet deschis de ${user.email}`,
        },
      });
      await prisma.istorictichet.create({
        data: {
          idtichet: tichet.idtichet,
          datacreare: dataCreare,
          modificare: `Tichet asignat lui ${suport.email}`,
        },
      });

      return "Tichetul a fost creat cu succes cu detaliile primite";
    } else if (
      user.idcompanie !== null &&
      user.tichetValidareDeschis === true &&
      user.tiputilizator === "client"
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
        let idstatus = 3; // Caz nou
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
              timpP1 = Number(subscriptie.p3.substring(0, 1));
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
            modificare: `Tichet deschis de ${user.email}`,
          },
        });
        const suport = await prisma.utilizator.findUnique({
          where: { idutilizator: idSuport },
        });
        await prisma.istorictichet.create({
          data: {
            idtichet: istoicTichet.idtichet,
            datacreare: dataCreare,
            modificare: `Tichet asignat lui ${suport.email}`,
          },
        });
        return "Tichetul a fost creat cu succes cu detaliile primite";
      } else {
        return "Compania este setata ca inactiva.";
      }
    } else if (user.idcompanie === null) {
      return "Clientului nu i-a fost asignata o companie.";
    } else {
      return "Tichetul nu a fost creat, lipsesc date pentru completare";
    }
  } catch (error) {
    console.log(error);
  }
  return tichet;
};

tichetRouter.post("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  const { titlu, prioritate, produs, notite, specializare } = {
    ...req.body,
  };
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
        res.status(201).send({
          message: "Tichetul a fost creat cu succes cu detaliile primite",
        });
        break;
      case "Compania este setata ca inactiva.":
        res.status(409).send({ message: "Compania este setata ca inactiva." });
        break;
      case "Clientului nu i-a fost asignata o companie.":
        res
          .status(409)
          .send({ message: "Clientului nu i-a fost asignata o companie." });
        break;
      default:
        res.status(403).send({
          message: "Tichetul nu a fost creat, lipsesc date pentru completare",
        });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

const insertConsult = async (idtichetparinte, user, body) => {
  if (user.tiputilizator === "admin" && idtichetparinte) {
    let tichetParinte = await prisma.tichet.findUnique({
      where: { idtichet: idtichetparinte },
    });
    if (tichetParinte.idsuport === user.idutilizator) {
      let utilizator = await prisma.utilizator.findUnique({
        where: {
          idutilizator: tichetParinte.idutilizator,
        },
      });
      let companie = await prisma.companie.findUnique({
        where: { idcompanie: utilizator.idcompanie },
      });
      const subscriptie = await getSubscriptie(companie.tipsubscriptie);
      let tipTichet = "consult";
      let dataCreare = new Date().toISOString();
      let idstatus = 3; // Caz nou
      let idSuport = await getAdminTicheteMinime(body.specializare);
      let timpPtRaspuns = new Date();
      timpPtRaspuns.setHours(timpPtRaspuns.getHours() + 3);
      let timpP1;
      switch (body.prioritate) {
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
        titlu: body.titlu,
        tiptichet: tipTichet,
        prioritate: body.prioritate,
        datacreare: dataCreare,
        produs: body.produs,
        escalat: false,
        idsuport: idSuport,
        idutilizator: user.idutilizator,
        notite: body.notite,
        idspecializare: body.specializare,
        idstatus: idstatus,
        timpPentruRaspuns: timpPtRaspuns,
        consult: 0,
      };
      let istoricTichet = await prisma.tichet.create({ data: data });

      const consult = await prisma.istorictichet.create({
        data: {
          idtichet: istoricTichet.idtichet,
          datacreare: dataCreare,
          modificare: `Tichet deschis de ${user.email}`,
        },
      });
      await prisma.tichet.update({
        where: { idtichet: idtichetparinte },
        data: { consult: istoricTichet.idtichet },
      });
      return "Tichetul a fost creat cu succes cu detaliile primite";
    } else {
      return "Doar proprietarul cazului poate deschide consult.";
    }
  }
};

tichetRouter.post(
  "/:idtichetparinte/consult",
  esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { idtichetparinte } = { ...req.params };
      const { user } = { ...req };
      const { body } = { ...req };
      const tichet = await insertConsult(Number(idtichetparinte), user, body);
      if (tichet === "Doar proprietarul cazului poate deschide consult.") {
        res.status(403).send({
          message: "Doar proprietarul cazului poate deschide consult.",
        });
      } else {
        res.status(200).send({
          message: "Consultul a fost creat cu succes cu detaliile primite.",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

const insertBug = async (idtichetparinte, user, body) => {
  try {
    if (user.tiputilizator === "admin" && idtichetparinte) {
      let tichetParinte = await prisma.tichet.findUnique({
        where: { idtichet: idtichetparinte },
        f,
      });
      if (tichetParinte.idsuport === user.idutilizator) {
        let utilizator = await prisma.utilizator.findUnique({
          where: {
            idutilizator: tichetParinte.idutilizator,
          },
        });
        let companie = await prisma.companie.findUnique({
          where: { idcompanie: utilizator.idcompanie },
        });
        const subscriptie = await getSubscriptie(companie.tipsubscriptie);
        let tipTichet = "bug";
        let dataCreare = new Date().toISOString();
        let idstatus = 3; // Caz nou
        let idSuport = await getAdminTicheteMinime(body.specializare);
        let timpPtRaspuns = new Date();
        timpPtRaspuns.setHours(timpPtRaspuns.getHours() + 3);
        let timpP1;
        switch (body.prioritate) {
          case "P1":
            timpP1 = Number(subscriptie.p1.substring(0, 1));
            timpPtRaspuns.setHours(timpPtRaspuns.getHours() + timpP1);
            break;
          case "P2":
            if (subscriptie.tip === "Gold" || subscriptie.tip === "Platinum") {
              timpP1 = Number(
                subscriptie.p2.substring(
                  0,
                  subscriptie.tip === "Gold" || subscriptie.tip === "Platinum"
                    ? 1
                    : 2
                )
              );
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
          titlu: body.titlu,
          tiptichet: tipTichet,
          prioritate: body.prioritate,
          datacreare: dataCreare,
          produs: body.produs,
          escalat: false,
          idsuport: idSuport,
          idutilizator: user.idutilizator,
          notite: body.notite,
          idspecializare: body.specializare,
          idstatus: idstatus,
          timpPentruRaspuns: timpPtRaspuns,
          consult: 0,
          bug: 0,
        };
        let istoicTichet = await prisma.tichet.create({ data: data });
        await prisma.tichet.update({
          where: { idtichet: idtichetparinte },
          data: { bug: istoicTichet.idtichet },
        });
        await prisma.istorictichet.create({
          data: {
            idtichet: istoicTichet.idtichet,
            datacreare: dataCreare,
            modificare: `Bug deschis de ${user.email}`,
          },
        });
        return "Bugul a fost creat cu succes cu detaliile primite.";
      } else {
        return "Doar proprietarul cazului poate deschide bug.";
      }
    }
  } catch (error) {
    console.log(error);
  }
};

tichetRouter.post(
  "/:idtichetparinte/bug",
  esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { idtichetparinte } = { ...req.params };
      const { user } = { ...req };
      const { body } = { ...req };
      const tichet = await insertBug(Number(idtichetparinte), user, body);
      if (tichet === "Doar proprietarul cazului poate deschide bug.") {
        res
          .status(403)
          .send({ message: "Doar proprietarul cazului poate deschide bug." });
      } else {
        res.status(200).send({
          message: "Bugul a fost creat cu succes cu detaliile primite.",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

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
        datainchidere: tichet.datainchidere,
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

const getTicheteleMele = async (user) => {
  let tichete = null;
  try {
    if (user.tiputilizator === "admin") {
      tichete = await prisma.tichet.findMany({
        where: {
          idsuport: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [1, 2, 3, 4, 5],
            },
          },
        },
      });
      let ticheteNoi = [];
      for (let tichet of tichete) {
        let suport = await prisma.utilizator.findUnique({
          where: { idutilizator: tichet.idsuport },
        });
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
          timpPentruRaspuns: tichet.timpPentruRaspuns,
        };
        ticheteNoi.push(tichetDeTrimis);
      }
      return ticheteNoi;
    } else if (user.tiputilizator === "client") {
      tichete = await prisma.tichet.findMany({
        where: {
          idutilizator: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [1, 2, 4, 5, 3],
            },
          },
        },
      });
      let ticheteNoi = [];
      for (let tichet of tichete) {
        let suport = await prisma.utilizator.findUnique({
          where: { idutilizator: tichet.idsuport },
        });
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
          numesuport: `${suport.nume} ${suport.prenume}`,
          timpPentruRaspuns: tichet.timpPentruRaspuns,
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
        res.status(200).send(tichet);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

const getTicheteleMeleInactive = async (user) => {
  let tichete = null;
  try {
    if (user.tiputilizator === "admin") {
      tichete = await prisma.tichet.findMany({
        where: {
          idsuport: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [7, 8, 9, 10, 11, 6],
            },
          },
        },
      });
      let ticheteNoi = [];
      for (let tichet of tichete) {
        let suport = await prisma.utilizator.findUnique({
          where: { idutilizator: tichet.idsuport },
        });
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
          datainchidere: tichet.datainchidere,
        };
        ticheteNoi.push(tichetDeTrimis);
      }
      return ticheteNoi;
    } else if (user.tiputilizator === "client") {
      tichete = await prisma.tichet.findMany({
        where: {
          idutilizator: Number(user.idutilizator),
          AND: {
            idstatus: {
              in: [7, 8, 9, 10, 11, 6],
            },
          },
        },
      });
      let ticheteNoi = [];
      for (let tichet of tichete) {
        let suport = await prisma.utilizator.findUnique({
          where: { idutilizator: tichet.idsuport },
        });
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
          numesuport: `${suport.nume} ${suport.prenume}`,
          datainchidere: tichet.datainchidere,
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

tichetRouter.get(
  "/ticheteleMele/inchise",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    const { user } = { ...req };
    try {
      const tichet = await getTicheteleMeleInactive(user);
      if (tichet === "Utilizatorul nu are tichete.") {
        res.status(404).send({
          message: "Utilizatorul nu are tichete.",
        });
      } else {
        res.status(200).send(tichet);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

const updateTichet = async (idtichet, user, body) => {
  let tichet = null;
  let tichetValidat = await prisma.tichet.findUnique({
    where: { idtichet: idtichet },
  });
  if (
    tichetValidat.idstatus !== 6 &&
    tichetValidat.idstatus !== 11 &&
    tichetValidat.idstatus !== 10 &&
    tichetValidat.idstatus !== 9 &&
    tichetValidat.idstatus !== 8 &&
    tichetValidat.idstatus !== 7
  ) {
    try {
      if (
        user.tiputilizator === "client" &&
        body.bug === undefined &&
        body.consult === undefined
      ) {
        if (body.prioritate && body.prioritate !== tichetValidat.prioritate) {
          await insertIstoricTichet(
            idtichet,
            `Tichetul ${idtichet} a fost reprioritizat la ${body.prioritate} de ${user.email}.`
          );
        }
        if (
          tichetValidat.escalat !== body.escalat &&
          body.escalat !== undefined
        ) {
          await insertIstoricTichet(
            idtichet,
            `Tichetul ${idtichet} a fost ${
              body.escalat ? "escalat" : "deescalat"
            } de catre ${user.email}.`
          );
        }

        if (body.idstatus) {
          let status = await prisma.statustichete.findFirst({
            where: { nume: { contains: body.idstatus, mode: "insensitive" } },
          });
          body.idstatus = status.idstatus;
          await insertIstoricTichet(
            idtichet,
            `Statusul tichetului ${idtichet} a fost modificat in ${status.nume} de catre ${user.email}.`
          );
          await prisma.tichet.update({
            where: { idtichet: idtichet },
            data: { datainchidere: new Date().toISOString() },
          });
        }
        tichet = await prisma.tichet.update({
          where: { idtichet: idtichet },
          data: body,
        });
      } else if (user.tiputilizator === "admin") {
        if (
          tichetValidat.escalat !== body.escalat &&
          body.escalat !== undefined
        ) {
          await insertIstoricTichet(
            idtichet,
            `Tichetul ${idtichet} a fost ${
              body.escalat ? "escalat" : "deescalat"
            } de catre ${user.email}.`
          );
        }
        if (body.consult) {
          await insertIstoricTichet(
            idtichet,
            `Tichetului ${idtichet} i-a fost deschis consult de catre ${user.email}.`
          );
        }
        if (body.bug) {
          await insertIstoricTichet(
            idtichet,
            `Tichetului ${idtichet} i-a fost deschis bug de catre ${user.email}.`
          );
        }
        if (body.prioritate) {
          if (body.prioritate !== tichetValidat.prioritate) {
            await insertIstoricTichet(
              idtichet,
              `Tichetul ${idtichet} a fost reprioritizat la ${body.prioritate} de ${user.email}.`
            );
          }
        }
        if (body.idsuport) {
          let suport = await prisma.utilizator.findUnique({
            where: { idutilizator: body.idsuport },
          });
          await insertIstoricTichet(
            idtichet,
            `Tichetul ${idtichet} a fost asignat pe ${suport.email} de ${user.email}.`
          );
        }
        if (body.idstatus) {
          let status = await prisma.statustichete.findFirst({
            where: { nume: { contains: body.idstatus, mode: "insensitive" } },
          });
          if (status.idstatus !== tichetValidat.idstatus) {
            await insertIstoricTichet(
              idtichet,
              `Statusul tichetului ${idtichet} a fost modificat in ${status.nume} de catre ${user.email}.`
            );
          }
          body.idstatus = status.idstatus;
        }
        if (body.idspecializare) {
          let specializare = await prisma.specializare.findUnique({
            where: { idspecializare: Number(body.idspecializare) },
          });
          if (specializare.idspecializare !== tichetValidat.idspecializare) {
            await insertIstoricTichet(
              idtichet,
              `Specializarea tichetului ${idtichet} a fost modificat in ${specializare.nume} de catre ${user.email}.`
            );
          }
          body.idspecializare = specializare.idspecializare;
        }

        if (body.produs) {
          let produs = await prisma.produse.findUnique({
            where: { idprodus: Number(body.produs) },
          });

          if (produs.nume !== tichetValidat.produs) {
            await insertIstoricTichet(
              idtichet,
              `Produsul tichetului ${idtichet} a fost modificat in ${produs.nume} de catre ${user.email}.`
            );
          }
          body.produs = produs.nume;
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
  } else {
    return "Tichetul nu poate fi actualizat deoarece este deja inchis.";
  }
  return null;
};

tichetRouter.patch(
  "/:idtichet",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const { body } = { ...req };

      const tichet = await updateTichet(Number(idtichet), user, body);

      if (tichet?.idsuport) {
        res
          .status(200)
          .send({ message: "Tichetul a fost actualizat cu succes." });
      } else if (
        tichet === "Tichetul nu poate fi actualizat deoarece este deja inchis."
      ) {
        res.status(403).send({
          message: "Tichetul nu poate fi actualizat deoarece este deja inchis.",
        });
      } else if (
        tichet === "Aceasta operatiune nu este permisa pentru clienti."
      ) {
        res.status(403).send({
          message: "Aceasta operatiune nu este permisa pentru clienti.",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

const insertMesajTichet = async (idtichet, user, mesaj) => {
  let mesajTichet = null;
  let emitatorMesaj = null;
  let dataCreare = new Date().toISOString();
  let tichetValidat = await prisma.tichet.findUnique({
    where: { idtichet: idtichet },
  });
  if (
    tichetValidat.idstatus !== 6 &&
    tichetValidat.idstatus !== 11 &&
    tichetValidat.idstatus !== 10 &&
    tichetValidat.idstatus !== 9 &&
    tichetValidat.idstatus !== 8 &&
    tichetValidat.idstatus !== 7
  ) {
    try {
      if (user.tiputilizator === "admin") {
        emitatorMesaj = "admin";

        const utilizator = await prisma.utilizator.findUnique({
          where: { idutilizator: tichetValidat.idutilizator },
        });
        await prisma.istorictichet.create({
          data: {
            idtichet: idtichet,
            modificare: `Mesaj trimis de admin: ${user.email}`,
            datacreare: dataCreare,
          },
        });
        mesajTichet = await prisma.mesaje.create({
          data: {
            continut: mesaj,
            idtichet: idtichet,
            emitatormesaj: emitatorMesaj,
            datacreare: dataCreare,
            emailsuport: user.email,
            emailutilizator: utilizator.email,
          },
        });
      } else {
        emitatorMesaj = "client";
        const tichet = await prisma.tichet.findUnique({
          where: { idtichet: idtichet },
        });
        const utilizator = await prisma.utilizator.findUnique({
          where: { idutilizator: tichet.idsuport },
        });
        await prisma.istorictichet.create({
          data: {
            idtichet: idtichet,
            modificare: `Mesaj trimis de client: ${user.email}`,
            datacreare: dataCreare,
          },
        });
        mesajTichet = await prisma.mesaje.create({
          data: {
            continut: mesaj,
            idtichet: idtichet,
            emitatormesaj: emitatorMesaj,
            datacreare: dataCreare,
            emailutilizator: user.email,
            emailsuport: utilizator.email,
          },
        });
        let timpPentruRaspuns = new Date();
        timpPentruRaspuns.setHours(timpPentruRaspuns.getHours() + 24);

        await prisma.tichet.update({
          where: { idtichet: idtichet },
          data: { timpPentruRaspuns: timpPentruRaspuns, idstatus: 2 },
        });
      }
    } catch (error) {
      console.log(error);
    }
    return mesajTichet;
  } else {
    return "Tichetul nu poate fi actualizat deoarece este deja inchis.";
  }
};

tichetRouter.post(
  "/:idtichet/mesaj",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const { mesaj } = { ...req.body };

      if (mesaj !== undefined && mesaj.trim() !== "") {
        let mesajFinal = await insertMesajTichet(Number(idtichet), user, mesaj);
        if (
          mesajFinal ===
          "Tichetul nu poate fi actualizat deoarece este deja inchis."
        ) {
          res.status(403).send({
            message:
              "Tichetul nu poate fi actualizat deoarece este deja inchis.",
          });
        }
        res.status(200).send({ message: "Mesajul a fost trimis cu succes." });
      } else if (!mesaj || mesaj.trim() === "") {
        res.status(400).send({ message: "Mesajul nu poate fi gol." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

const getMesajeTichet = async (idtichet, user) => {
  let mesajeFinale = null;
  try {
    if (user.tiputilizator === "client") {
      const tichet = await prisma.tichet.findUnique({
        where: { idtichet: idtichet },
      });
      if (tichet.idutilizator !== user.idutilizator) {
        return "Utilizatorul nu are acces la acest tichet.";
      } else {
        let mesaje = await prisma.mesaje.findMany({
          where: {
            idtichet: idtichet,
            AND: {
              emitatormesaj: {
                in: ["admin", "client"],
              },
            },
          },
        });
        let istoricTichet = await getIstoricTichet(idtichet, user);
        mesajeFinale = mesaje.concat(istoricTichet);
        for (let i = 0; i < mesajeFinale.length - 1; i++) {
          for (let j = i + 1; j < mesajeFinale.length; j++) {
            if (mesajeFinale[i].datacreare < mesajeFinale[j].datacreare) {
              let temp = mesajeFinale[i];
              mesajeFinale[i] = mesajeFinale[j];
              mesajeFinale[j] = temp;
            }
            if (mesajeFinale[i].datacreare === mesajeFinale[j].datacreare) {
              let temp = mesajeFinale[j];
              mesajeFinale[j] = mesajeFinale[i];
              mesajeFinale[i] = temp;
            }
          }
        }
      }
    } else {
      let mesaje = await prisma.mesaje.findMany({
        where: { idtichet: idtichet },
      });
      let istoricTichet = await getIstoricTichet(idtichet, user);
      mesajeFinale = mesaje.concat(istoricTichet);
      for (let i = 0; i < mesajeFinale.length - 1; i++) {
        for (let j = i + 1; j < mesajeFinale.length; j++) {
          if (mesajeFinale[i].datacreare < mesajeFinale[j].datacreare) {
            let temp = mesajeFinale[i];
            mesajeFinale[i] = mesajeFinale[j];
            mesajeFinale[j] = temp;
          }
          if (mesajeFinale[i].datacreare === mesajeFinale[j].datacreare) {
            let temp = mesajeFinale[j];
            mesajeFinale[j] = mesajeFinale[i];
            mesajeFinale[i] = temp;
          }
        }
      }
    }
    return mesajeFinale;
  } catch (error) {
    console.log(error);
  }
};

tichetRouter.get(
  "/:idtichet/mesaje",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const mesaje = await getMesajeTichet(Number(idtichet), user);
      if (mesaje === "Utilizatorul nu are acces la acest tichet.") {
        res.status(403).send({
          message: "Utilizatorul nu are acces la acest tichet.",
        });
      } else {
        res.status(200).send(mesaje);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

const insertMesajIntern = async (idtichet, user, mesaj) => {
  let mesajTichet = null;
  let emitatorMesaj = null;
  let dataCreare = new Date().toISOString();
  try {
    if (user.tiputilizator === "admin") {
      emitatorMesaj = "intern";
      mesajTichet = await prisma.mesaje.create({
        data: {
          continut: mesaj,
          idtichet: idtichet,
          emitatormesaj: emitatorMesaj,
          datacreare: dataCreare,
          emailsuport: user.email,
          emailutilizator: user.email,
        },
      });
      await prisma.istorictichet.create({
        data: {
          idtichet: idtichet,
          modificare: `Mesaj intern trimis de ${user.email}`,
          datacreare: dataCreare,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
  return mesajTichet;
};

tichetRouter.post(
  "/:idtichet/mesajIntern",
  esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const { mesaj } = { ...req.body };

      if (mesaj) {
        await insertMesajIntern(Number(idtichet), user, mesaj);
        res.status(200).send({ message: "Mesajul a fost trimis cu succes." });
      } else {
        res.status(400).send({ message: "Mesajul nu poate fi gol." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { tichetRouter };
