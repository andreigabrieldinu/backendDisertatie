import express from "express";
import prisma from "../prisma/prismaClient.js";
import { getEchipaCompanie } from "./echipaCompanie.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const membruEchipaRouter = express.Router();

const insertMembruEchipa = async (nume, prenume, rol, email, numeEchipa) => {
  let membruEchipa = null;
  try {
    membruEchipa = await prisma.membruechipa.findFirst({
      where: { email: email },
    });
    if (membruEchipa) {
      return "Membrul echipei deja exista";
    } else {
      if (numeEchipa) {
        let echipa = await getEchipaCompanie(numeEchipa);
        if (echipa) {
          membruEchipa = await prisma.membruechipa.create({
            data: {
              nume: nume,
              prenume: prenume,
              email: email,
              rol: rol,
              idechipa: echipa.idechipa,
            },
          });
        } else {
          return "Nu exista aceasta echipa";
        }
      } else {
        return "Adaugati un nume de echipa";
      }
    }
  } catch (error) {
    console.log(error);
  }

  return membruEchipa;
};

const getMembriEchipa = async (numeEchipa) => {
  let membriEchipa = null;
  try {
    const echipa = await getEchipaCompanie(numeEchipa);
    if (!echipa) {
      return "Aceasta echipa nu exista";
    } else {
      membriEchipa = await prisma.membruechipa.findMany({
        where: { idechipa: Number(echipa.idechipa) },
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

const deleteMembruEchipa = async (email) => {
  let membruEchipa = null;
  try {
    const membruEchipa = await prisma.membruechipa.findFirst({
      where: { email: email },
    });
    if (membruEchipa) {
      await prisma.membruechipa.delete({
        where: { email: membruEchipa.email },
      });
      return "Membrul echipei a fost sters";
    } else {
      return "Membrul echipei nu exista";
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
      const { nume, prenume, rol, email, numeEchipa } = { ...req.body };
      let membruEchipa = await insertMembruEchipa(
        nume,
        prenume,
        rol,
        email,
        numeEchipa
      );
      switch (membruEchipa) {
        case "Aceasta echipa nu exista":
          res.status(404).send({ message: "Aceasta echipa nu exista" });
          break;
        case "Membrul echipei deja exista":
          res.status(409).send({ message: "Membrul echipei deja exista" });
          break;
        case "Adaugati un nume de echipa":
          res.status(400).send({ message: "Adaugati un nume de echipa" });
          break;
        default:
          res.status(201).send(membruEchipa);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

membruEchipaRouter.get(
  "/:id",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { id } = { ...req.params };
      const membriEchipa = await getMembriEchipa(id);
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
  "/membru/:email",
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

membruEchipaRouter.delete(
  "/:email",
  //esteUtilizatorAdmin
  async (req, res) => {
    try {
      const { email } = { ...req.params };
      const membruEchipa = await deleteMembruEchipa(email);
      if (membruEchipa === "Membrul echipei nu exista") {
        res.status(404).send({ message: "Membrul echipei nu exista" });
      } else {
        res.status(200).send({ message: membruEchipa });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export { membruEchipaRouter };
