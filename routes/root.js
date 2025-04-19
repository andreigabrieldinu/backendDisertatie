import express from "express";
import { specializariRouter } from "./specializare.js";
import { utilizatorRouter } from "./utilizator.js";
import { produsRouter } from "./produs.js";
import { subscriptieRouter } from "./subscriptie.js";

const rootRouter = express.Router();

rootRouter.use("/specializari", specializariRouter);
rootRouter.use("/user", utilizatorRouter);
rootRouter.use("/produse", produsRouter);
rootRouter.use("/subscriptie", subscriptieRouter);

export { rootRouter };
