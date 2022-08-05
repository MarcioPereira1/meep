import { Request, Response } from "express";
import { DeletePartyUseCase } from "./DeletePartyUseCase";

export class DeletePartyController {

    async handle(req: Request, res: Response) {        
        const { id } = req.params
        const { id_user } = req

        const deletePartyUseCase =  new DeletePartyUseCase()

        const result = await deletePartyUseCase.execute({
            id_user, id
        })

        return res.json(result)
    }
}