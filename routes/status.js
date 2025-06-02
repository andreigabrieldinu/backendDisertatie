import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const statusRouter = express.Router();

const getStatus = async (idstatus) => {
  let status = null;
  try {
    status = await prisma.statustichete.findFirst({
      where: {
        idstatus: idstatus,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return status;
};

const getAllStatuses = async () => {
  let statuses = null;
  try {
    statuses = await prisma.statustichete.findMany({
      orderBy: {
        idstatus: "asc",
      },
    });
  } catch (error) {
    console.log(error);
  }
  return statuses;
};

statusRouter.get("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  const statuses = await getAllStatuses();
  if (statuses) {
    res.status(200).json(statuses);
  } else {
    res.status(500).json({ error: "Eroare la obtinerea statusurilor." });
  }
});

statusRouter.get(
  "/:idstatus",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    const idstatus = parseInt(req.params.idstatus);
    if (isNaN(idstatus)) {
      return res.status(400).json({ error: "ID-ul statusului nu este valid." });
    }
    const status = await getStatus(idstatus);
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(404).json({ error: "Statusul nu a fost gasit." });
    }
  }
);

export { statusRouter };
