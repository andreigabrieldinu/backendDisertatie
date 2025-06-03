import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";
import { getSubscriptie } from "./subscriptie.js";
import { getIstoricTichet } from "./istoricTichet.js";

const dashboardDiferiteAgregariRouter = express.Router();

const tichetePeStatus = async (statusuri, user) => {
  try {
    const statusurileDinDb = await prisma.statustichete.findMany({
      where: {
        nume: { in: statusuri, mode: "insensitive" },
      },
    });
    //creeaza un array cu id-urile statusurilor
    const idstatusuri = statusurileDinDb.map((status) => status.idstatus);

    const statusPeTichete = await prisma.tichet.groupBy({
      by: ["idstatus"],
      _count: {
        idtichet: true,
      },
      where: {
        idstatus: { in: idstatusuri },
        idutilizator: user.idutilizator,
      },
      orderBy: {
        idstatus: "asc",
      },
    });

    let arrayTichetePeStatus = [];
    for (const status of statusPeTichete) {
      let numeStatus = statusurileDinDb.find(
        (s) => s.idstatus === status.idstatus
      );

      arrayTichetePeStatus.push({
        status: numeStatus.nume,
        numarTichete: status._count.idtichet,
      });
    }
    for (const status of statusuri) {
      if (
        !arrayTichetePeStatus.some(
          (s) => s.status.toLowerCase() === status.toLowerCase()
        )
      ) {
        arrayTichetePeStatus.push({
          status: status,
          numarTichete: 0,
        });
      }
    }
    return arrayTichetePeStatus;
  } catch (error) {
    console.error("Eroare la obtinerea tichete pe status:", error);
    throw new Error("Eroare la obtinerea datelor");
  }
};

dashboardDiferiteAgregariRouter.get(
  "/tichetePeStatus",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { statusuri } = { ...req.body };
      const { user } = { ...req };
      if (!statusuri || !Array.isArray(statusuri) || statusuri.length === 0) {
        return res.status(404).json({
          message: "Nu s-au furnizat statusuri sau formatul este incorect",
        });
      }
      let nrTichetePeStatusuri = await tichetePeStatus(statusuri, user);
      res.json(nrTichetePeStatusuri);
    } catch (error) {
      console.error("Eroare la obtinerea tichete pe status:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

const getTicheteInchiseSiDeschise = async (user) => {
  try {
    const ticheteDeschise = await prisma.tichet.groupBy({
      by: ["idstatus"],
      _count: {
        idtichet: true,
      },
      where: {
        idutilizator: user.idutilizator,
        idstatus: { in: [1, 2, 3, 4, 5] },
      },
      orderBy: {
        idstatus: "asc",
      },
    });

    const ticheteInchise = await prisma.tichet.groupBy({
      by: ["idstatus"],
      _count: {
        idtichet: true,
      },
      where: {
        idutilizator: user.idutilizator,
        idstatus: { in: [6, 7, 8, 9, 10, 11] },
      },
      orderBy: {
        idstatus: "asc",
      },
    });

    if (ticheteDeschise.length === 0 && ticheteInchise.length === 0) {
      return {
        "Tichete deschise": 0,
        "Tichete inchise": 0,
      };
    }

    let totalDeschise = 0;
    let totalInchise = 0;
    ticheteDeschise.reduce((acc, curr) => {
      totalDeschise += curr._count.idtichet;
      return acc;
    }, 0);
    ticheteInchise.reduce((acc, curr) => {
      totalInchise += curr._count.idtichet;
      return acc;
    }, 0);

    let final = {
      "Tichete deschise": totalDeschise,
      "Tichete inchise": totalInchise,
    };
    return final;
  } catch (error) {
    console.error("Eroare la obtinerea tichete inchise si deschise:", error);
    throw new Error("Eroare la obtinerea datelor");
  }
};

dashboardDiferiteAgregariRouter.get(
  "/ticheteInchiseSiDeschise",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { user } = { ...req };
      let ticheteInchiseSiDeschise = await getTicheteInchiseSiDeschise(user);
      res.json(ticheteInchiseSiDeschise);
    } catch (error) {
      console.error("Eroare la obtinerea tichete pe subscriptie:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

const getTicheteDeschisePeZile = async (user) => {
  try {
    let ticheteDeschisePeZile = await prisma.tichet.groupBy({
      by: ["datacreare"],
      _count: {
        idtichet: true,
      },
      where: {
        idutilizator: user.idutilizator,
        idstatus: { in: [1, 2, 3, 4, 5] },
      },
      orderBy: {
        datacreare: "asc",
      },
    });
    //formateaza ticheteDeschisePeZile pentru a avea data in format YYYY-MM-DD si de forma {"nrTichete": 5, "data": "2023-10-01"}
    ticheteDeschisePeZile = ticheteDeschisePeZile.map((tichet) => {
      return {
        nrTichete: tichet._count.idtichet,
        data: tichet.datacreare.toISOString().split("T")[0], // formateaza data in YYYY-MM-DD
      };
    });

    if (ticheteDeschisePeZile.length === 0) {
      return [];
    }
    return ticheteDeschisePeZile;
  } catch (error) {
    console.error("Eroare la obtinerea tichete deschise pe zile:", error);
    throw new Error("Eroare la obtinerea datelor");
  }
};

dashboardDiferiteAgregariRouter.get(
  "/ticheteDeschisePeZile",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { user } = { ...req };
      let ticheteDeschisePeZile = await getTicheteDeschisePeZile(user);
      if (ticheteDeschisePeZile.length === 0) {
        return res.status(404).json({
          message: "Nu exista tichete deschise pe zile pentru acest utilizator",
        });
      }
      res.json(ticheteDeschisePeZile);
    } catch (error) {
      console.error("Eroare la obtinerea tichete deschise pe zile:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

export { dashboardDiferiteAgregariRouter };
