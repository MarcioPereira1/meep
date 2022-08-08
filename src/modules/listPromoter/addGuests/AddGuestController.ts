import { Request, Response } from "express";
import { AddGuestUseCase } from "./AddGuestUseCase";


export class AddGuestController {

    async handle(req: Request, res: Response) {
        const { id_user } = req
        const { id_listPromoter } = req.params
        const { cpfGuest } = req.body

        const addGuestUseCase = new AddGuestUseCase()

        const result = await addGuestUseCase.execute({
            id_listPromoter,
            id_user,
            cpfGuest
        })

        return res.status(200).json(result)
    }
}