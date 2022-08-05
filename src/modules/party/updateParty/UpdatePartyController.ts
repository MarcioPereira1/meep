import { Request, Response } from "express";
import { UpdatePartyUseCase } from "./UpdatePartyUseCase";


export class UpdatePartyController {

    async handle(req: Request, res: Response) {
        const { id_user } = req
        const { id } = req.params
        const { name, start, end } = req.body

        const updatePartyUseCase = new UpdatePartyUseCase()

        const result = await updatePartyUseCase.execute({
            id,
            id_user,
            end,
            name,
            start
        })

        return res.json(result)
    }
}