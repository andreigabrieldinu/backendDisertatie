import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const tichetRouter = express.Router();

const insertTichet = async (data) => {};

tichetRouter.post(
  "/",
  //esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      console.log(req);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { tichetRouter };
