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
      return [{ nrTichete: 0, data: endDate }];
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

dashboardDiferiteAgregariRouter.get(
  "/ticheteSpecializare/:idspecializare",
  esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const { idspecializare } = req.params;

      const ticheteSpecializare = await prisma.tichet.groupBy({
        by: ["idstatus", "idsuport"],
        _count: {
          idtichet: true,
        },
        where: {
          idspecializare: Number(idspecializare),
          idstatus: { in: [1, 2, 3, 4, 5] },
        },
        orderBy: {
          idstatus: "asc",
        },
      });
      for (let i = 0; i < ticheteSpecializare.length; i++) {
        const suport = await prisma.utilizator.findUnique({
          where: { idutilizator: ticheteSpecializare[i].idsuport },
          select: { nume: true, prenume: true },
        });
        delete ticheteSpecializare[i].idsuport;
        ticheteSpecializare[i].numeSuport = suport
          ? `${suport.nume} ${suport.prenume}`
          : "N/A";
        if (ticheteSpecializare[i].nrTichetePeStatus === undefined) {
          ticheteSpecializare[i].nrTichetePeStatus = [];
          let newStatusuriSiTichet;
          newStatusuriSiTichet = {
            idstatus: ticheteSpecializare[i].idstatus,
            numarTichete: ticheteSpecializare[i]._count.idtichet,
          };
          ticheteSpecializare[i].nrTichetePeStatus.push(newStatusuriSiTichet);
        } else {
          let newStatusuriSiTichet;
          newStatusuriSiTichet = {
            idstatus: ticheteSpecializare[i].idstatus,
            numarTichete: ticheteSpecializare[i]._count.idtichet,
          };
          ticheteSpecializare[i].nrTichetePeStatus.push(newStatusuriSiTichet);
        }
        delete ticheteSpecializare[i]._count;
        delete ticheteSpecializare[i].idstatus;
      }

      ticheteSpecializare.sort((a, b) =>
        a.numeSuport > b.numeSuport ? 1 : b.numeSuport > a.numeSuport ? -1 : 0
      );

      for (let i = 0; i < ticheteSpecializare.length; i++) {
        for (let j = i + 1; j < ticheteSpecializare.length; j++) {
          if (
            ticheteSpecializare[i].numeSuport ===
            ticheteSpecializare[j].numeSuport
          ) {
            ticheteSpecializare[i].nrTichetePeStatus.push({
              idstatus: ticheteSpecializare[j].nrTichetePeStatus[0].idstatus,
              numarTichete:
                ticheteSpecializare[j].nrTichetePeStatus[0].numarTichete,
            });
            ticheteSpecializare.splice(j, 1);
            j--;
          }
        }
      }

      let obiectDetrimis = {};

      let seria1 = [];
      let seria2 = [];
      let seria3 = [];
      let seria4 = [];
      let seria5 = [];

      for (let i = 0; i < ticheteSpecializare.length; i++) {
        for (
          let j = 0;
          j < ticheteSpecializare[i].nrTichetePeStatus.length;
          j++
        ) {
          if (
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 1 &&
            j === 0
          ) {
            seria1.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          } else if (j < 1) {
            seria1.push(0);
          } else if (
            j >= 1 &&
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 1
          ) {
            seria1.pop();
            seria1.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          }

          if (
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 2 &&
            j === 0
          ) {
            seria2.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          } else if (j < 1) {
            seria2.push(0);
          } else if (
            j >= 1 &&
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 2
          ) {
            seria2.pop();
            seria2.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          }
          if (
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 3 &&
            j === 0
          ) {
            seria3.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          } else if (j < 1) {
            seria3.push(0);
          } else if (
            j >= 1 &&
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 3
          ) {
            seria3.pop();
            seria3.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          }
          if (
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 4 &&
            j === 0
          ) {
            seria4.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          } else if (j < 1) {
            seria4.push(0);
          } else if (
            j >= 1 &&
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 4
          ) {
            seria4.pop();
            seria4.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          }
          if (
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 5 &&
            j == 0
          ) {
            seria5.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          } else if (j < 1) {
            seria5.push(0);
          } else if (
            j >= 1 &&
            ticheteSpecializare[i].nrTichetePeStatus[j].idstatus === 5
          ) {
            seria5.pop();
            seria5.push(
              ticheteSpecializare[i].nrTichetePeStatus[j].numarTichete
            );
          }
        }
      }

      let userToSends = [];
      for (let i = 0; i < ticheteSpecializare.length; i++) {
        userToSends.push(ticheteSpecializare[i].numeSuport);
      }
      obiectDetrimis = {
        seria1: seria1,
        seria2: seria2,
        seria3: seria3,
        seria4: seria4,
        seria5: seria5,
        users: userToSends,
      };

      if (ticheteSpecializare.length === 0) {
        return res.status(404).json({
          message: "Nu exista tichete pentru aceasta specializare",
        });
      }

      res.json(obiectDetrimis);
    } catch (error) {
      console.error("Eroare la obtinerea tichete pe specializare:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

dashboardDiferiteAgregariRouter.get(
  "/ticheteInchisePeProdus/:specializare",
  // esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const specializare = req.params.specializare;

      const ticheteInchisePeProdus = await prisma.tichet.groupBy({
        by: ["produs"],
        _count: {
          idtichet: true,
        },
        where: {
          idstatus: { in: [6, 7, 8, 9, 10, 11] },
          idspecializare: Number(specializare),
        },
        orderBy: {
          produs: "asc",
        },
      });

      let produseInchise = ticheteInchisePeProdus.map((tichet) => {
        return {
          label: tichet.produs,
          value: tichet._count.idtichet,
        };
      });

      produseInchise = produseInchise.sort((a, b) =>
        a.value > b.value ? -1 : b.value > a.value ? 1 : 0
      );
      let obiectDetrimis = { labels: [], values: [] };
      for (let i = 0; i < produseInchise.length; i++) {
        obiectDetrimis.labels.push(produseInchise[i].label);
        obiectDetrimis.values.push(produseInchise[i].value);
      }

      if (produseInchise.length === 0 || !produseInchise) {
        return res.status(404).json({
          message: "Nu avem tichete inchise pentru aceasta specializare",
        });
      }

      res.json(obiectDetrimis);
    } catch (error) {
      console.error("Eroare la obtinerea produselor inchise:", error);
      res.status(500).json({ message: "Eroare la obtinerea datelor" });
    }
  }
);

dashboardDiferiteAgregariRouter.get(
  "/tichetePeCompanii/:tipTichet",
  //esteUtilizatorAdmin,
  async (req, res) => {
    try {
      const tipTichet = Number(req.params.tipTichet);
      let statusTichete = [1, 2, 3, 4, 5];
      if (tipTichet === 0) {
        statusTichete = [6, 7, 8, 9, 10, 11];
      }
      const companii = await prisma.companie.findMany({
        select: {
          idcompanie: true,
          nume: true,
        },
        orderBy: {
          idcompanie: "asc",
        },
      });
      let obiectDetrimis = [];

      for (let i = 0; i < companii.length; i++) {
        let obiectDeAdaugat = {
          id: i,
          label: companii[i].nume,
          value: 0,
        };
        let allUsers = await prisma.utilizator.findMany({
          select: {
            idutilizator: true,
            nume: true,
            prenume: true,
            idcompanie: true,
          },
          where: {
            idcompanie: companii[i].idcompanie,
          },
        });
        for (let j = 0; j < allUsers.length; j++) {
          let tichetePeUtilizator = await prisma.tichet.groupBy({
            by: ["idutilizator"],
            _count: {
              idtichet: true,
            },
            where: {
              idutilizator: allUsers[j].idutilizator,
              idstatus: { in: statusTichete },
            },
          });
          if (tichetePeUtilizator.length > 0) {
            for (let k = 0; k < tichetePeUtilizator.length; k++) {
              obiectDeAdaugat.value += tichetePeUtilizator[k]._count.idtichet;
            }
          }
        }
        if (obiectDeAdaugat.value > 0) {
          obiectDetrimis.push(obiectDeAdaugat);
        }
      }
      res.json(obiectDetrimis);
    } catch (error) {
      console.error("Eroare la obtinerea tichete pe companii:", error);
    }
  }
);

export { dashboardDiferiteAgregariRouter };
