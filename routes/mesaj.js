import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const mesajRouter = express.Router();

const insertMesajTichet = async (data) => {};

mesajRouter.post(
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

export { mesajRouter };
