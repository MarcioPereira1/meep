import { Request, Response } from "express";
import { DeleteListUseCase } from "./DeleteListUseCase";


export class DeleteListController {

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const deleteListUseCase = new DeleteListUseCase()

        const result = await deleteListUseCase.execute(id)

        return res.status(200).json(result)
    }
}