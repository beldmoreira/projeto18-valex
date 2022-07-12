import { Router } from "express";
import * as cardController from "../controllers/cardController.js";
import joiValidation from "../middlewares/joiValidation.js";
import {activateCardSchema,createCardSchema} from "../schemas/cardSchemas.js"

const cardRouter = Router();
cardRouter.post("/cards", joiValidation(createCardSchema),cardController.createCard)
cardRouter.put("/cards", joiValidation(activateCardSchema), cardController.activateCard)

export default cardRouter;
