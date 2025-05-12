import express from "express";
import { specializariRouter } from "./specializare.js";
import { utilizatorRouter } from "./utilizator.js";
import { produsRouter } from "./produs.js";
import { subscriptieRouter } from "./subscriptie.js";
import { echipaCompanieRouter } from "./echipaCompanie.js";
import { companieRouter } from "./companie.js";
import { membruEchipaRouter } from "./membruEchipa.js";
import { mesajRouter } from "./mesaj.js";
import { tichetRouter } from "./tichet.js";
import { istoricTichetRouter } from "./istoricTichet.js";

const rootRouter = express.Router();

rootRouter.use("/specializari", specializariRouter);
rootRouter.use("/user", utilizatorRouter);
rootRouter.use("/produse", produsRouter);
rootRouter.use("/subscriptie", subscriptieRouter);
rootRouter.use("/companie", companieRouter);
rootRouter.use("/echipaCompanie", echipaCompanieRouter);
rootRouter.use("/membruEchipa", membruEchipaRouter);
rootRouter.use("/mesaj", mesajRouter);
rootRouter.use("/tichete", tichetRouter);
rootRouter.use("/istoricTichet", istoricTichetRouter);

export { rootRouter };
