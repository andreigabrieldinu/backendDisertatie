import express from "express";
import prisma from "../prisma/prismaClient.js";
import {
  esteUtilizatorAdmin,
  esteUtilizatorClientSauAdmin,
} from "./utilizator.js";

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
        id: numeStatus.idstatus,
        label: numeStatus.nume,
        value: status._count.idtichet,
      });
    }

    for (const status of statusurileDinDb) {
      if (
        !arrayTichetePeStatus.some((s) => {
          s.label === status.nume;
        })
      ) {
        arrayTichetePeStatus.push({
          id: status.idstatus,
          label: status.nume,
          value: 0,
        });
      }
    }
    // sterge duplicatele care au valoarea 0
    for (let i = 0; i < arrayTichetePeStatus.length; i++) {
      for (let j = i + 1; j < arrayTichetePeStatus.length; j++) {
        if (
          arrayTichetePeStatus[i].label === arrayTichetePeStatus[j].label &&
          arrayTichetePeStatus[j].value === 0
        ) {
          arrayTichetePeStatus.splice(j, 1);
          j--;
        }
      }
    }

    return arrayTichetePeStatus;
  } catch (error) {
    console.error("Eroare la obtinerea tichete pe status:", error);
    throw new Error("Eroare la obtinerea datelor");
  }
};

dashboardDiferiteAgregariRouter.post(
  "/tichetePeStatus",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { statusuri } = { ...req.body };
      const { user } = { ...req };
      if (!statusuri || !Array.isArray(statusuri) || statusuri.length === 0) {
        return res
          .status(200)
          .json([{ status: "Nu s-au selectat statusuri", numarTichete: 0 }]);
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
      ticheteDeschise: totalDeschise,
      ticheteInchise: totalInchise,
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
    ticheteDeschisePeZile = ticheteDeschisePeZile.map((tichet) => {
      return {
        nrTichete: tichet._count.idtichet,
        data: tichet.datacreare.toISOString().split("T")[0],
      };
    });
    //grupeaza tichetele pe zile
    for (let i = 0; i < ticheteDeschisePeZile.length; i++) {
      for (let j = i + 1; j < ticheteDeschisePeZile.length; j++) {
        if (ticheteDeschisePeZile[i].data === ticheteDeschisePeZile[j].data) {
          ticheteDeschisePeZile[i].nrTichete +=
            ticheteDeschisePeZile[j].nrTichete;
          ticheteDeschisePeZile.splice(j, 1);
          j--;
        }
      }
    }

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
  "/ticheteDeschisePeZileAllTime",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { user } = { ...req };
      let ticheteDeschisePeZile = await getTicheteDeschisePeZile(
        user,
        startDate,
        endDate
      );
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

const getTicheteDeschisePeZileInterval = async (user, startDate, endDate) => {
  try {
    let ticheteDeschisePeZile = await prisma.tichet.groupBy({
      by: ["datacreare"],
      _count: {
        idtichet: true,
      },
      where: {
        idutilizator: user.idutilizator,
        idstatus: { in: [1, 2, 3, 4, 5] },
        datacreare: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: {
        datacreare: "asc",
      },
    });
    ticheteDeschisePeZile = ticheteDeschisePeZile.map((tichet) => {
      return {
        nrTichete: tichet._count.idtichet,
        data: tichet.datacreare.toISOString().split("T")[0],
      };
    });
    //grupeaza tichetele pe zile
    for (let i = 0; i < ticheteDeschisePeZile.length; i++) {
      for (let j = i + 1; j < ticheteDeschisePeZile.length; j++) {
        if (ticheteDeschisePeZile[i].data === ticheteDeschisePeZile[j].data) {
          ticheteDeschisePeZile[i].nrTichete +=
            ticheteDeschisePeZile[j].nrTichete;
          ticheteDeschisePeZile.splice(j, 1);
          j--;
        }
      }
    }
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
  "/ticheteDeschisePeZileInterval/startDate/:startDate/endDate/:endDate",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { user } = { ...req };
      const { startDate, endDate } = req.params;

      if (!startDate || !endDate) {
        return res.status(400).json({
          message: "Datele de inceput si final sunt necesare",
        });
      }
      if (new Date(startDate) > new Date(endDate)) {
        return res.status(400).json({
          message: "Data de inceput trebuie sa fie inainte de data de final",
        });
      }
      let ticheteDeschisePeZile = await getTicheteDeschisePeZileInterval(
        user,
        startDate,
        endDate
      );
      if (ticheteDeschisePeZile.length === 0) {
        return res.status(404).json({
          message: "Nu exista tichete deschise pe zile in acest interval",
        });
      }
      res.json(ticheteDeschisePeZile);
    } catch (error) {
      console.error("Eroare la obtinerea tichete deschise pe zile:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

dashboardDiferiteAgregariRouter.get(
  "/produsePeTichete",
  esteUtilizatorClientSauAdmin,
  async (req, res) => {
    try {
      const { user } = { ...req };
      const produsePeTichete = await prisma.tichet.groupBy({
        by: ["produs"],
        _count: {
          idtichet: true,
        },
        where: {
          idutilizator: user.idutilizator,
          idstatus: { in: [1, 2, 3, 4, 5] },
        },
        orderBy: {
          produs: "asc",
        },
      });

      let produsePeTicheteFinal = produsePeTichete.map((tichet) => {
        return {
          label: tichet.produs,
          value: tichet._count.idtichet,
        };
      });

      if (produsePeTicheteFinal.length === 0 || !produsePeTicheteFinal) {
        return res.status(404).json({
          message: "Nu exista produse asociate cu tichetele acestui utilizator",
        });
      }

      res.json(produsePeTicheteFinal);
    } catch (error) {
      console.error("Eroare la obtinerea produselor pe tichete:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

export { dashboardDiferiteAgregariRouter };
