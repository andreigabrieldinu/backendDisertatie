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
) => {};

companieRouter.post(
  "/",
  //  esteUtilizatorAdmin,
  async (req, res) => {}
);

export { companieRouter };
