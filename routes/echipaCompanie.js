import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const echipaCompanieRouter = express.Router();

const insertEchipaCompanie = async (nume) => {
  let echipaCompanie;
  try {
    echipaCompanie = await prisma.echipacompanie.findFirst({
      where: {
        nume: nume,
      },
    });
    if (echipaCompanie) {
      return "Echipa deja exista.";
    } else {
    }
  } catch (error) {
    console.log(error);
  }
  if (!echipaCompanie) {
    try {
      echipaCompanie = await prisma.echipacompanie.create({
        data: {
          nume: nume,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return echipaCompanie;
};

const getEchipaCompanie = async (nume) => {
  let echipaCompanie = null;
  try {
    echipaCompanie = await prisma.echipacompanie.findFirst({
      where: {
        nume: nume,
      },
    });
    if (!echipaCompanie) return "Echipa nu exista";
  } catch (error) {
    console.log(error);
  }
  return echipaCompanie;
};

const deleteEchipaCompanie = async (idEchipa) => {
  let echipaCompanie = null;
  try {
    echipaCompanie = await prisma.echipacompanie.delete({
      where: { idechipa: idEchipa },
    });
  } catch (error) {
    console.log(error);
  }
  return echipaCompanie;
};

echipaCompanieRouter.post(
  "/",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { nume } = { ...req.body };
      let echipaCompanie = await insertEchipaCompanie(nume);
      if (echipaCompanie === "Echipa deja exista.") {
        res.status(409).send({ message: "Echipa deja exista." });
      } else {
        res.status(201).send({ message: "Echipa a fost creata." });
      }
    } catch (error) {}
  }
);

echipaCompanieRouter.get(
  "/:nume",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { nume } = { ...req.params };
      let echipaCompanie = await getEchipaCompanie(nume);
      if (echipaCompanie) res.status(200).send(echipaCompanie);
      else {
        res.status(404).send({ message: "Echipa nu exista." });
      }
    } catch (error) {}
  }
);

echipaCompanieRouter.delete(
  "/:nume",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { nume } = { ...req.params };
      let echipaCompanie = await prisma.echipacompanie.findFirst({
        where: { nume: nume },
      });
      if (!echipaCompanie) {
        res.status(404).send({ message: "Echipa nu exista" });
      } else {
        await deleteEchipaCompanie(echipaCompanie.idechipa);
        res.status(200).send({ message: "Echipa a fost stearsa." });
      }
    } catch (error) {}
  }
);

export { echipaCompanieRouter };
