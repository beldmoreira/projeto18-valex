import { Router } from "express";
import * as paymentController from "../controllers/paymentController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { paymentSchema } from "../schemas/paymentSchemas.js" 

const paymentRouter = Router();

paymentRouter.post("/payments", joiValidation(paymentSchema), paymentController.payment);


export default paymentRouter;