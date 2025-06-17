import express from "express";
import prisma from "../prisma/prismaClient.js";
import { getEchipaCompanie } from "./echipaCompanie.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const membruEchipaRouter = express.Router();

const insertMembruEchipa = async (nume, prenume, rol, email, idEchipa) => {
  let membruEchipa = null;
  try {
    membruEchipa = await prisma.membruechipa.findFirst({
      where: { email: email },
    });
    if (membruEchipa) {
      return "Membrul echipei deja exista";
    } else {
      let echipa = await getEchipaCompanie(idEchipa);
      console.log(echipa);

      if (echipa !== "Echipa nu exista" && echipa) {
        membruEchipa = await prisma.membruechipa.create({
          data: {
            nume: nume,
            prenume: prenume,
            email: email,
            rol: rol,
            idechipa: idEchipa,
          },
        });
      } else {
        return "Nu exista aceasta echipa";
      }
    }
  } catch (error) {
    console.log(error);
  }

  return membruEchipa;
};

const getMembriEchipa = async (id) => {
  let membriEchipa = null;
  try {
    const echipa = await getEchipaCompanie(id);
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

const getMembruEchipa = async (idMembru) => {
  let membruEchipa = null;
  try {
    const membruEchipa = await prisma.membruechipa.findUnique({
      where: { id: Number(idMembru) },
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

const deleteMembruEchipa = async (id) => {
  let membruEchipa = null;
  try {
    const membruEchipa = await prisma.membruechipa.findFirst({
      where: { id: id },
    });
    if (membruEchipa) {
      await prisma.membruechipa.delete({
        where: { id: id },
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

membruEchipaRouter.post("/", esteUtilizatorAdmin, async (req, res) => {
  try {
    const { nume, prenume, rol, email, idechipa } = { ...req.body };
    let membruEchipa = await insertMembruEchipa(
      nume,
      prenume,
      rol,
      email,
      idechipa
    );
    switch (membruEchipa) {
      case "Nu exista aceasta echipa":
        res.status(404).send({ message: "Nu exista aceasta echipa " });
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
});

membruEchipaRouter.get("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  try {
    const membriEchipa = await prisma.membruechipa.findMany();

    if (!membriEchipa || membriEchipa.length === 0) {
      res.status(404).send({ message: "Nu exista membri in echipa" });
    } else {
      res.status(200).send(membriEchipa);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

membruEchipaRouter.get("/:id", esteUtilizatorAdmin, async (req, res) => {
  try {
    const { id } = { ...req.params };
    const membruEchipa = await getMembruEchipa(Number(id));
    if (membruEchipa === "Aceast membru nu exista") {
      res.status(404).send({ message: "Aceasta echipa nu exista" });
    } else {
      res.status(200).send(membruEchipa);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

membruEchipaRouter.get(
  "/toataEchipa/:id",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { id } = { ...req.params };
      const membriEchipa = await getMembriEchipa(Number(id));
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

membruEchipaRouter.delete("/:id", esteUtilizatorAdmin, async (req, res) => {
  try {
    const { id } = { ...req.params };
    const membruEchipa = await deleteMembruEchipa(Number(id));
    if (membruEchipa === "Membrul echipei nu exista") {
      res.status(404).send({ message: "Membrul echipei nu exista" });
    } else {
      res.status(200).send({ message: membruEchipa });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export { membruEchipaRouter };
