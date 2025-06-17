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
  idEchipa,
  PretLunarFocus
) => {
  let companie = null;
  try {
    companie = await prisma.companie.findFirst({ where: { nume: nume } });
    if (companie) return "Compania deja exista.";

    let subscriptie = await getSubscriptie(tipSubscriptie);

    if (subscriptie) {
      let echipa = await getEchipaCompanie(idEchipa);
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
            PretLunarFocus: PretLunarFocus,
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

const getCompanie = async (id, email) => {
  let companieDupaValidare = null;
  id = Number(id);
  try {
    const utilizator = await prisma.utilizator.findFirst({
      where: { email: email },
    });
    const companie = await prisma.companie.findUnique({
      where: { idcompanie: id },
    });

    if (!companie) {
      return "Compania nu exista.";
    }
    if (
      utilizator.tiputilizator === "admin" ||
      utilizator.idcompanie === companie.idcompanie
    ) {
      companieDupaValidare = { ...companie };
    } else {
      return "Utilizatorul nu are permisiune sa vada compania.";
    }
  } catch (error) {
    console.log(error);
  }
  return companieDupaValidare;
};

const getCompanii = async () => {
  let companii = null;
  try {
    companii = await prisma.companie.findMany();
    if (!companii || companii.length === 0) {
      return res.status(404).send({ message: "Nu exista companii" });
    }
    let companiiToSend = [];
    for (let companie of companii) {
      let companieToSend = {
        id: companie.idcompanie,
        nume: companie.nume,
        datacreare: companie.datacreare,
        status: companie.status,
        focus: companie.focus,
        notitedesprecompanie: companie.notitedesprecompanie,
        tipsubscriptie: companie.tipsubscriptie,
        idechipa: companie.idechipa,
        pretLunarFocus: companie.PretLunarFocus,
      };
      companiiToSend.push(companieToSend);
    }

    if (!companii) return "Nu exista companii";
    companii = companiiToSend;
  } catch (error) {
    console.log(error);
  }
  return companii;
};

const updateCompanie = async (id, data) => {
  let companie = null;
  try {
    let companieVeche = await prisma.companie.findUnique({
      where: { idcompanie: Number(id) },
    });
    companie = await prisma.companie.update({
      where: { idcompanie: Number(id) },
      data: {
        tipsubscriptie: data.tipsubscriptie
          ? data.tipsubscriptie
          : companieVeche.tipsubscriptie,

        status: data.status ? data.status : companieVeche.status,
        focus:
          data.focus === true || data.focus === false
            ? data.focus
            : companieVeche.focus,
        idechipa: data.idechipa ? data.idechipa : companieVeche.idechipa,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return companie;
};

companieRouter.post("/", esteUtilizatorAdmin, async (req, res) => {
  const {
    nume,
    status,
    tipSubscriptie,
    focus,
    notiteDespreCompanie,
    idechipa,
    pretLunarFocus,
  } = { ...req.body };
  try {
    let companie = await insertCompanie(
      nume,
      status,
      tipSubscriptie,
      focus,
      notiteDespreCompanie,
      idechipa,
      pretLunarFocus
    );
    switch (companie) {
      case "Compania deja exista.":
        res.status(409).send({ message: "Compania deja exista." });
        break;
      case "Compania trebuie sa aiba o echipa":
        res.status(400).send({ message: "Compania trebuie sa aiba o echipa" });
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
});

companieRouter.get("/:id", esteUtilizatorClientSauAdmin, async (req, res) => {
  try {
    const { id } = { ...req.params };
    const { email } = { ...req.user };
    const companie = await getCompanie(id, email);
    if (companie === "Compania nu exista.") {
      res.status(404).send({ message: "Compania nu exista" });
    } else if (
      companie === "Utilizatorul nu are permisiune sa vada compania."
    ) {
      res
        .status(404)
        .send({ message: "Utilizatorul nu are permisiune sa vada compania." });
    } else {
      res.status(200).send(companie);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

companieRouter.get("/", esteUtilizatorAdmin, async (req, res) => {
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

companieRouter.patch("/:id", esteUtilizatorAdmin, async (req, res) => {
  try {
    const { id } = { ...req.params };
    const data = { ...req.body };

    let companie = await updateCompanie(id, data);
    if (companie) {
      res.status(200).send(companie);
    } else {
      res.status(404).send({ message: "Compania nu exista." });
    }
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

companieRouter.delete("/:id", esteUtilizatorAdmin, async (req, res) => {
  try {
    const { id } = { ...req.params };
    const companie = await prisma.companie.delete({
      where: { idcompanie: Number(id) },
    });
    res.status(200).send({ message: "Compania a fost stearsa." });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export { companieRouter, getCompanie };
