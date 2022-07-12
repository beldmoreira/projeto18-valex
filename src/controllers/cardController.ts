import { Request, Response } from "express";
import * as cardServices from "../services/cardsServices.js"

export async function createCard (req: Request, res: Response) {
    const card = await cardServices.create()
    res.status(201).send(card);
}

export async function activateCard (req:Request, res: Response) {

    return res.sendStatus(200);
}

export async function deactivateCard (req:Request, res: Response){

    return res.sendStatus(200);
}