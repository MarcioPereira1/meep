import { Request, Response } from "express";
import { CreatePartyUseCase } from "./CreatePartyUseCase";


export class CreatePartyController {

    async handle(req: Request, res: Response) {
        const { name, start, end } = req.body

        const createPartyUseCase = new CreatePartyUseCase()

        const result = await createPartyUseCase.execute({
            name,
            start,
            end
        })

        return res.json(result)
    }
}