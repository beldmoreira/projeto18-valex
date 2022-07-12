import { Router } from "express";
import * as rechargeController from "../controllers/rechargeController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { rechargeSchema } from "../schemas/rechargeSchemas.js"


const rechargeRouter = Router();

rechargeRouter.post ("/recharge", joiValidation(rechargeSchema),rechargeController.rechargeCard)

export default rechargeRouter;