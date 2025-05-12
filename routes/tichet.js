import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

const tichetRouter = express.Router();

// constrangere companie activa constrangere tichet validare
//tipTichet - client (daca e deschis de client), consult (daca e deschis de admin)
//dataCreare- today
//statusCurent - nou, asignat, in progres, asteptare raspuns client, consult deschis, inchis
//consultDeschis - numar tichet
//bugDeschis - true/false
//escalat - true/false
//idSuport - asignee
//idUtilizator - creator tichet
//link docs
const insertTichet = async (
  titlu,
  prioritate,
  produs,
  notite,
  specializare,
  user
) => {
  let tichet = null;
  //daca tichet de validare nu a fost deschis
  if (!user.tichetValidareDeschis && user.tiputilizator === "client") {
    let tipTichet = user.tiputilizator;
    let dataCreare = new Date().toISOString();
    let idstatus = 4; // Caz nou
    let escalat = false;
    // De calculat cine primeste cazul.
    let idUtilizator = user.idutilizator;
    tichet = await prisma.tichet.create({ data: {} });
  } else {
    const companie = await prisma.companie.findUnique({
      where: {
        idcompanie: idcompanie,
      },
    });
  }
  if (companie)
    try {
    } catch (error) {}

  return tichet;
};

tichetRouter.post("/", esteUtilizatorClientSauAdmin, async (req, res) => {
  const { titlu, prioritate, produs, notite, specializare } = { ...req.body };
  const user = req.user;
  console.log(idcompanie, tichetValidareDeschis);

  try {
    let tichet = await insertTichet(
      titlu,
      prioritate,
      produs,
      notite,
      specializare,
      user
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

export { tichetRouter };
