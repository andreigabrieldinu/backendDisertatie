import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const subscriptieRouter = express.Router();

const createSubscriptie = async (
  tip,
  nrMaxUtilizatori,
  timpRaspunsP1,
  timpRaspunsP2,
  timpRaspunsP3,
  timpRaspunsP4
) => {
  let subscriptie = null;
  try {
    subscriptie = await prisma.subscriptie.findFirst({ where: { tip: tip } });
    if (subscriptie) {
      return "Subscriptia deja exista.";
    }
  } catch (error) {
    console.log(error);
  }
  if (!subscriptie) {
    try {
      subscriptie = await prisma.subscriptie.create({
        data: {
          tip: tip,
          numarmaximutilizatori: nrMaxUtilizatori,
          timpraspunsp1: timpRaspunsP1,
          timpraspunsp2: timpRaspunsP2,
          timpraspunsp3: timpRaspunsP3,
          timpraspunsp4: timpRaspunsP4,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return subscriptie;
};

const getSubscriptie = async (tip) => {
  let subscriptie = null;
  try {
    subscriptie = await prisma.subscriptie.findFirst({
      where: {
        tip: tip,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return subscriptie;
};

const getSubscriptii = async () => {
  let subscriptii = null;
  try {
    subscriptii = await prisma.subscriptie.findMany();
  } catch (error) {
    console.log(error);
  }
  return subscriptii;
};

const updateSubscriptii = async (tip, data) => {
  let subscriptieVeche;
  try {
    subscriptieVeche = await prisma.subscriptie.findFirst({
      where: { tip: tip },
    });
  } catch (error) {
    console.log(error);
  }
  let numarMaximUtilizatori = subscriptieVeche.numarmaximutilizatori;
  let timpRaspunsP1 = subscriptieVeche.timpraspunsp1;
  let timpRaspunsP2 = subscriptieVeche.timpraspunsp2;
  let timpRaspunsP3 = subscriptieVeche.timpraspunsp3;
  let timpRaspunsP4 = subscriptieVeche.timpraspunsp4;

  if (data) {
    if (data.numarMaximUtilizatori)
      numarMaximUtilizatori = data.numarMaximUtilizatori;
    if (data.timpRaspunsP1) timpRaspunsP1 = data.timpRaspunsP1;
    if (data.timpRaspunsP2) timpRaspunsP2 = data.timpRaspunsP2;
    if (data.timpRaspunsP3) timpRaspunsP3 = data.timpRaspunsP3;
    if (data.timpRaspunsP4) timpRaspunsP4 = data.timpRaspunsP4;
  }
  let subscriptie = null;
  try {
    subscriptie = await prisma.subscriptie.update({
      where: {
        tip: tip,
      },
      data: {
        numarmaximutilizatori: numarMaximUtilizatori,
        timpraspunsp1: timpRaspunsP1,
        timpraspunsp2: timpRaspunsP2,
        timpraspunsp3: timpRaspunsP3,
        timpraspunsp4: timpRaspunsP4,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return subscriptie;
};

const deleteSubscriptie = async (tip) => {
  let subscriptie = null;
  try {
    subscriptie = await prisma.subscriptie.delete({ where: { tip: tip } });
  } catch (error) {
    console.log(error);
  }
  return subscriptie;
};

subscriptieRouter.post(
  "/",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const {
        tip,
        numarMaximUtilizatori,
        timpRaspunsP1,
        timpRaspunsP2,
        timpRaspunsP3,
        timpRaspunsP4,
      } = { ...req.body };
      const subscriptie = await createSubscriptie(
        tip,
        numarMaximUtilizatori,
        timpRaspunsP1,
        timpRaspunsP2,
        timpRaspunsP3,
        timpRaspunsP4
      );
      if (subscriptie === "Subscriptia deja exista.") {
        res.status(409).send({ message: "Subscriptia deja exista." });
      } else {
        res.status(201).send({ message: "Subscriptia a fost creata." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

subscriptieRouter.get(
  "/:tip",
  //  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    let subscriptie;
    try {
      const { tip } = { ...req.params };
      subscriptie = await getSubscriptie(tip);
      if (subscriptie) {
        res.status(200).send(subscriptie);
      } else {
        res.status(404).send({ message: "Subscriptia nu exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

subscriptieRouter.get("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  let subscriptii;
  try {
    subscriptii = await getSubscriptii();
    if (subscriptii) {
      res.status(200).send(subscriptii);
    } else {
      res.status(404).send({ message: "Subscriptiile nu exista." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

subscriptieRouter.patch(
  "/:tip",
  //esteUtilizatorAdmin,
  async (req, res) => {
    let subscriptii;
    try {
      const { tip } = { ...req.params };
      const data = { ...req.body };
      subscriptii = await updateSubscriptii(tip, data);
      if (subscriptii) {
        res.status(200).send({ message: "Subscriptia a fost actualizata" });
      } else {
        res.status(404).send({ message: "Subscriptia nu exista." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

subscriptieRouter.delete(
  "/:tip",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { tip } = { ...req.params };
      const subscriptie = await deleteSubscriptie(tip);
      if (subscriptie) {
        res.status(200).send({ message: "Subscriptia a fost stearsa." });
      } else {
        res.status(404).send({ message: "Subscriptia nu exista." });
      }
    } catch (error) {}
  }
);

export { subscriptieRouter };
