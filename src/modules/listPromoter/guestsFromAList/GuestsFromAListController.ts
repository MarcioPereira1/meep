import { Request, Response } from "express";
import { GuestsFromAListUseCase } from "./GuestsFromAListUseCase";


export class GuestsFromAListController {

    async handle(req: Request, res: Response) {
        const { id_listPromoter } = req.params

        const guestsFromAListUseCase = new GuestsFromAListUseCase() 

        const result = await guestsFromAListUseCase.execute(id_listPromoter)

        return res.status(200).json(result)
    }
}