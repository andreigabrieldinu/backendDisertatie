import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";
import { getSubscriptie } from "./subscriptie.js";
import e from "express";

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
  if (!titlu || !prioritate || !produs || !specializare) {
    return "Tichetul nu a fost creat, lipsesc date pentru completare";
  }
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
      user.idcompanie &&
      user.tichetValidareDeschis &&
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
        return "Tichetul a fost creat cu succes cu detaliile primite";
      }
    } else {
      return "Tichetul nu a fost creat, lipsesc date pentru completare";
    }
  } catch (error) {
    console.log(error);
  }
  return tichet;
};

const insertBug = async (idtichetparinte, user, body) => {
  try {
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
        let tipTichet = "bug";
        let dataCreare = new Date().toISOString();
        let idstatus = 4; // Caz nou
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

const getAllTichete = async () => {
  return await prisma.tichet.findMany();
};

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
      let idstatus = 4; // Caz nou
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
      body.bug === undefined &&
      body.consult === undefined
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
      case "Clientul nu a fost validat.":
        res.status(409).send({ message: "Clientul nu a fost validat." });
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

tichetRouter.get("/", esteUtilizatorAdmin, async (req, res) => {
  try {
    let tichete = await getAllTichete();
    res.status(200).send(tichete);
  } catch (error) {
    res.status(500).send(error);
  }
});

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
        res.status(200).send(tichet);
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

const insertMesajTichet = async (idtichet, user, mesaj) => {
  let mesajTichet = null;
  let emitatorMesaj = null;
  let dataCreare = new Date().toISOString();
  try {
    if (user.tiputilizator === "admin") {
      emitatorMesaj = "admin";
      const tichet = await prisma.tichet.findUnique({
        where: { idtichet: idtichet },
      });
      const utilizator = await prisma.utilizator.findUnique({
        where: { idutilizator: tichet.idutilizator },
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
      await prisma.istorictichet.create({
        data: {
          idtichet: idtichet,
          modificare: `Mesaj trimis de admin: ${user.email}`,
          datacreare: dataCreare,
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
      await prisma.istorictichet.create({
        data: {
          idtichet: idtichet,
          modificare: `Mesaj trimis de client: ${user.email}`,
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
  "/:idtichet/mesaj",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      const { mesaj } = { ...req.body };

      if (mesaj) {
        await insertMesajTichet(Number(idtichet), user, mesaj);
        res.status(200).send({ message: "Mesajul a fost trimis cu succes." });
      } else {
        res.status(400).send({ message: "Mesajul nu poate fi gol." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

const getMesajeTichet = async (idtichet, user) => {
  let mesaje = null;
  try {
    if (user.tiputilizator === "client") {
      const tichet = await prisma.tichet.findUnique({
        where: { idtichet: idtichet },
      });
      if (tichet.idutilizator !== user.idutilizator) {
        return "Utilizatorul nu are acces la acest tichet.";
      } else {
        mesaje = await prisma.mesaje.findMany({
          where: { idtichet: idtichet },
          AND: {
            emitatormesaj: {
              in: ["admin", "client"],
            },
          },
        });
      }
    } else {
      mesaje = await prisma.mesaje.findMany({
        where: { idtichet: idtichet },
      });
    }
    return mesaje;
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
