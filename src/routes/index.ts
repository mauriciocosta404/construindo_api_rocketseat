import { Router } from "express";
import { categoriesRoutes } from "./categoris.routes";
import { specificationsRoute } from "./specifications.routes";

const router=Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoute);

export {router};