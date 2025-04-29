import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const companieRouter = express.Router();

const insertCompanie = async (
  data,
  nume,
  status,
  tipSubscriptie,
  focus,
  notiteDespreCompanie,
  idEchipa
) => {
  let companie = null;
  try {
    companie = await prisma.companie.findFirst({ where: { nume: nume } });
    if (companie) {
      return "Compania deja exista.";
    } else {
      let tipSubscriptie = await prisma.subscriptie.findFirst({
        where: { tip: tipSubscriptie },
      });
      if (!tipSubscriptie) {
        return "Tipul subscriptiei nu exista.";
      } else {
        let echipa = await prisma.echipacompanie.findFirst({
          where: { idechipa: idEchipa },
        });
        if (!echipa) {
          return "Compania trebuie sa aiba o echipa";
        } else {
          await prisma.companie.create({
            data: {
              datacreare: data,
              nume: nume,
              status: status,
              tipsubscriptie: tipSubscriptie,
              focus: focus,
              notitedesprecompanie: notiteDespreCompanie,
              idechipa: idEchipa,
            },
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return companie;
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
      idEchipa,
    } = { ...req.body };
    let companie = await insertCompanie(
      nume,
      status,
      tipSubscriptie,
      focus,
      notiteDespreCompanie,
      idEchipa
    );
  }
);

export { companieRouter };
