import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const specializariRouter = express.Router();

const insertSpecializare = async (nume) => {
  let specializare = null;
  try {
    specializare = await prisma.specializare.findFirst({
      where: {
        nume: nume,
      },
    });
  } catch (error) {
    console.log(error);
  }
  if (!specializare) {
    try {
      await prisma.specializare.create({
        data: {
          nume: nume,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  return specializare;
};

const getSpecializare = async (nume) => {
  const specializare = await prisma.specializare.findFirst({
    where: {
      nume: nume,
    },
  });
  return specializare;
};

const getSpecializari = async () => {
  const specializari = await prisma.specializare.findMany();
  return specializari;
};

const deleteSpecializare = async (nume) => {
  let specializare;
  try {
    specializare = await prisma.specializare.findFirst({
      where: {
        nume: nume,
      },
    });
    if (specializare) {
      await prisma.specializare.delete({
        where: {
          idspecializare: specializare.idspecializare,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
  return specializare;
};

// CREARE SPECIALIZARE
specializariRouter.post(
  "/",
  //  esteUtilizatorAdmin,
  async (req, res) => {
    const { nume } = { ...req.body };
    try {
      const specializare = await insertSpecializare(nume);
      if (specializare) {
        res.status(201).send({ message: "Specializarea a fost stears" });
      } else {
        res.status(409).send({ message: "Specializarea deja exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

// GET SPECIALIZARE
specializariRouter.get(
  "/:nume",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    const nume = req.params.nume;
    try {
      const numeSpecializare = await getSpecializare(nume);
      res.status(200).send(numeSpecializare);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

// GET ALL SPECIALIZARI
specializariRouter.get("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  try {
    const specializari = await getSpecializari();
    res.status(200).send(specializari);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE SPECIALIZARE
specializariRouter.delete(
  "/:nume",
  //  esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { nume } = { ...req.params };
      const specializare = await deleteSpecializare(nume);
      if (specializare) {
        res.status(200).send(specializare);
      } else {
        res.status(200).send({ message: "Specializarea nu exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { specializariRouter };
