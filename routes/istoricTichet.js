import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const istoricTichetRouter = express.Router();

const getIstoricTichet = async (idtichet, user) => {
  try {
    if (user.tiputilizator === "admin") {
      let istoric = await prisma.istorictichet.findMany({
        where: { idtichet: idtichet },
      });
      return istoric;
    } else if (user.tiputilizator === "client") {
      const tichet = await prisma.tichet.findUnique({
        where: { idtichet: idtichet },
      });
      if (user.idutilizator === tichet.idutilizator) {
        let istoric = await prisma.istorictichet.findMany({
          where: { idtichet: idtichet },
        });
        let istoricFinal = [];
        for (let istoricul of istoric) {
          if (!istoricul.modificare.includes("intern")) {
            istoricFinal.push(istoricul);
          }
        }
        return istoricFinal;
      } else {
        return "Utilizatorul poate vedea doar istoricul tichetelor sale.";
      }
    }
  } catch (error) {
    console.log(error);
  }
};

istoricTichetRouter.get(
  "/:idtichet/istoric",
  esteUtilizatorClientSauAdmin,

  async (req, res) => {
    try {
      const { idtichet } = { ...req.params };
      const { user } = { ...req };
      let istoricTichet = await getIstoricTichet(Number(idtichet), user);
      if (
        istoricTichet ===
        "Utilizatorul poate vedea doar istoricul tichetelor sale."
      ) {
        res.status(403).send({
          message: "Utilizatorul poate vedea doar istoricul tichetelor sale.",
        });
      } else {
        res.status(200).send(istoricTichet);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { istoricTichetRouter, getIstoricTichet };
