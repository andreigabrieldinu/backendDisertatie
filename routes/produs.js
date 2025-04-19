import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const produsRouter = express.Router();

const insertProdus = async (nume, idSpecializare) => {
  let produs = null;
  try {
    produs = await prisma.produse.findFirst({ where: { nume: nume } });
    if (produs) {
      return "Produsul deja exista";
    }
  } catch (error) {
    return error;
  }
  if (!produs) {
    try {
      produs = await prisma.produse.create({
        data: {
          nume: nume,
          idspecializare: idSpecializare,
        },
      });
    } catch (error) {
      return error;
    }
  }
  return produs;
};

const getProdus = async (nume) => {
  try {
    let produs = await prisma.produse.findFirst({
      where: {
        nume: nume,
      },
    });
    return produs;
  } catch (error) {
    return error;
  }
};

const getProduse = async () => {
  try {
    let produse = await prisma.produse.findMany();
    return produse;
  } catch (error) {
    return error;
  }
};

const deleteProdus = async (nume) => {
  try {
    let produs = await prisma.produse.findFirst({ where: { nume: nume } });

    if (produs) {
      await prisma.specializare.delete({
        where: {
          idprodus: produs.idprodus,
        },
      });
    }
    return produs;
  } catch (error) {
    return error;
  }
};

produsRouter.post(
  "/",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { nume, idSpecializare } = { ...req.body };
      const produs = await insertProdus(nume, idSpecializare);
      if (produs === "Produsul deja exista") {
        res.status(409).send({ message: "Produsul deja exista" });
      } else {
        res.status(201).send(produs);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

produsRouter.get(
  "/:nume",
  //  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { nume } = { ...req.params };
      let produs = await getProdus(nume);
      if (produs) {
        res.status(200).send(produs);
      } else {
        res.status(404).send({ message: "Produsul nu exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

produsRouter.get(
  "/",
  //  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      let produse = await getProduse();
      if (produse) {
        res.status(200).send(produse);
      } else {
        res.status(404).send({ message: "Produsele nu exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

produsRouter.delete(
  "/:nume",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      let { nume } = { ...req.params };
      let produs = await deleteProdus(nume);
      if (produs) {
        res.status(200).send({ message: "Produsul a fost sters" });
      } else {
        res.status(404).send({ message: "Produsul nu exista" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { produsRouter };
