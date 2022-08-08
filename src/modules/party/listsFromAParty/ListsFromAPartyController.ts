import { Request, Response } from "express";
import { ListsFromAPartyUseCase } from "./ListsFromAPartyUseCase";


export class ListsFromAPartyController {

    async handle(req: Request, res: Response) {
        const { id_party } = req.params

        const listsFromAPartyUseCase = new ListsFromAPartyUseCase()

        const result = await listsFromAPartyUseCase.execute(id_party)

        return res.status(200).json(result)
    }
}