import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";
import { getSubscriptie } from "./subscriptie.js";
import { getEchipaCompanie } from "./echipaCompanie.js";

const companieRouter = express.Router();

const insertCompanie = async (
  nume,
  status,
  tipSubscriptie,
  focus,
  notiteDespreCompanie,
  numeEchipa
) => {
  let companie = null;
  try {
    companie = await prisma.companie.findFirst({ where: { nume: nume } });
    if (companie) return "Compania deja exista.";

    let subscriptie = await getSubscriptie(tipSubscriptie);

    if (subscriptie) {
      let echipa = await getEchipaCompanie(numeEchipa);
      if (!echipa) {
        return "Compania trebuie sa aiba o echipa";
      } else {
        let data = new Date();
        companie = await prisma.companie.create({
          data: {
            datacreare: data,
            nume: nume,
            status: status,
            tipsubscriptie: subscriptie.tip,
            focus: focus,
            notitedesprecompanie: notiteDespreCompanie,
            idechipa: echipa.idechipa,
          },
        });
      }
    } else {
      return "Tipul subscriptiei nu exista.";
    }
  } catch (error) {
    console.log(error);
  }
  return companie;
};

const getCompanie = async (nume) => {
  let companie = null;
  try {
    companie = await prisma.companie.findFirst({ where: { nume: nume } });
    if (!companie) {
      return "Compania nu exista";
    }
  } catch (error) {
    console.log(error);
  }
  return companie;
};

const getCompanii = async () => {
  let companii = null;
  try {
    companii = await prisma.companie.findMany();
    if (companii) return "Nu exista companii";
  } catch (error) {
    console.log(error);
  }
  return companii;
};

companieRouter.post(
  "/",
  //  esteUtilizatorAdmin,
  async (req, res) => {
    const {
      nume,
      status,
      tipSubscriptie,
      focus,
      notiteDespreCompanie,
      numeEchipa,
      pretLunarFocus,
    } = { ...req.body };
    try {
      let companie = await insertCompanie(
        nume,
        status,
        tipSubscriptie,
        focus,
        notiteDespreCompanie,
        numeEchipa,
        pretLunarFocus
      );
      switch (companie) {
        case "Compania deja exista.":
          res.status(409).send({ message: "Compania deja exista." });
          break;
        case "Compania trebuie sa aiba o echipa":
          res
            .status(400)
            .send({ message: "Compania trebuie sa aiba o echipa" });
          break;
        case "Tipul subscriptiei nu exista.":
          res.status(400).send({ message: "Tipul subscriptiei nu exista." });
          break;
        default:
          res.status(201).send({ message: "Compania a fost creata." });
          break;
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

companieRouter.get("/:nume", async (req, res) => {
  try {
    const { nume } = { ...req.params };
    const companie = await getCompanie(nume);
    if (companie === "Compania nu exista") {
      res.status(404).send({ message: "Compania nu exista" });
    } else {
      res.status(200).send(companie);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

companieRouter.get("/", async (req, res) => {
  try {
    const companii = await getCompanii();
    if (companii === "Nu exista companii") {
      res.status(404).send({ message: "Nu exista companii" });
    } else {
      res.status(200).send(companii);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const updateCompanie = async (nume, data) => {
  let companie = null;
  try {
    companie = await prisma.companie.findFirst({ where: { nume: nume } });
    let id = companie.idcompanie;
    companie = await prisma.companie.update({
      where: { idcompanie: id },
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return companie;
};

companieRouter.patch("/:nume", async (req, res) => {
  try {
    const { nume } = { ...req.params };
    const data = { ...req.body };

    let companie = await updateCompanie(nume, data);
    if (companie) {
      res.status(200).send({ message: "Compania a fost actualizata." });
    } else {
      res.status(404).send({ message: "Compania nu exista." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export { companieRouter };
