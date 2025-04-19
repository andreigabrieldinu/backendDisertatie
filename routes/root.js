import express from "express";
import { specializariRouter } from "./specializari.js";
import { utilizatorRouter } from "./utilizator.js";
import { produsRouter } from "./produs.js";
const rootRouter = express.Router();

rootRouter.use("/specializari", specializariRouter);
rootRouter.use("/user", utilizatorRouter);
rootRouter.use("/produse", produsRouter);

export { rootRouter };
