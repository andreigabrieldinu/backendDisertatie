import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const membruEchipaRouter = express.Router();

const insertMembruEchipa = async (nume, prenume, rol, email, idEchipa) => {
  let membruEchipa = null;
  try {
    membruEchipa = await prisma.membruechipa.findFirst({
      where: { nume: nume },
    });
    if (membruEchipa) {
      return "Membrul echipei deja exista";
    } else {
      membruEchipa = await prisma.membruechipa.create({
        data: {
          nume: nume,
          prenume: prenume,
          email: email,
          rol: rol,
          idechipa: idEchipa,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }

  return membruEchipa;
};

const getMembriEchipa = async (idEchipa) => {
  let membriEchipa = null;
  try {
    const echipa = await prisma.echipacompanie.findFirst({
      where: { idechipa: idEchipa },
    });

    if (!echipa) {
      return "Aceasta echipa nu exista";
    } else {
      membriEchipa = await prisma.membruechipa.findMany({
        where: { idechipa: idEchipa },
      });
    }
  } catch (error) {
    console.log(error);
  }
  return membriEchipa;
};

const getMembruEchipa = async (email) => {
  let membruEchipa = null;
  try {
    const membruEchipa = await prisma.membruechipa.findFirst({
      where: { email: email },
    });

    if (!membruEchipa) {
      return "Aceast membru nu exista";
    } else {
      return membruEchipa;
    }
  } catch (error) {
    console.log(error);
  }
  return membruEchipa;
};

membruEchipaRouter.post(
  "/",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { nume, prenume, rol, email, idEchipa } = { ...req.body };
      let membruEchipa = await insertMembruEchipa(
        nume,
        prenume,
        rol,
        email,
        idEchipa
      );
      if (membruEchipa === "Membrul echipei deja exista") {
        res.status(409).send({ message: "Membrul echipei deja exista" });
      } else {
        res.status(201).send({ message: "Membrul echipei a fost creat" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

membruEchipaRouter.get(
  "/:idEchipa",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { idEchipa } = { ...req.params };
      const membriEchipa = await getMembriEchipa(idEchipa);
      if (membriEchipa === "Aceasta echipa nu exista") {
        res.status(404).send({ message: "Aceasta echipa nu exista" });
      } else {
        res.status(200).send(membriEchipa);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

membruEchipaRouter.get(
  "/:email",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { email } = { ...req.params };
      const membruEchipa = await getMembruEchipa(email);
      if (membruEchipa === "Aceasta echipa nu exista") {
        res.status(404).send({ message: "Aceasta echipa nu exista" });
      } else {
        res.status(200).send(membruEchipa);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { membruEchipaRouter };
