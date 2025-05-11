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

const getAllEchipe = async () => {
  let echipe = null;
  try {
    echipe = await prisma.echipacompanie.findMany();
    if (!echipe) return "Nu exista echipe";
  } catch (error) {
    console.log(error);
  }
  return echipe;
};

const getEchipaCompanie = async (id) => {
  let echipaCompanie = null;
  try {
    echipaCompanie = await prisma.echipacompanie.findUnique({
      where: {
        idechipa: Number(id),
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
      where: { idechipa: Number(idEchipa) },
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
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

echipaCompanieRouter.get(
  "/",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const echipe = await getAllEchipe();
      if (echipe) {
        res.status(200).send(echipe);
      } else {
        res.status(404).send({ message: "Nu exista echipe." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

echipaCompanieRouter.get(
  "/:id",
  //esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { id } = { ...req.params };
      let echipaCompanie = await getEchipaCompanie(id);
      if (echipaCompanie) res.status(200).send(echipaCompanie);
      else {
        res.status(404).send({ message: "Echipa nu exista." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

echipaCompanieRouter.delete(
  "/:id",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { id } = { ...req.params };
      let echipaCompanie = await deleteEchipaCompanie(id);
      if (!echipaCompanie) {
        res.status(404).send({ message: "Echipa nu exista" });
      } else {
        await deleteEchipaCompanie(echipaCompanie.idechipa);
        res.status(200).send({ message: "Echipa a fost stearsa." });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { echipaCompanieRouter, getEchipaCompanie };
