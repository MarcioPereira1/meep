import { Request, Response } from "express";
import { CreateListPromoterUseCase } from "./CreateListPromoterUseCase";


export class CreateListPromoterController {

    async handle(req: Request, res: Response){
        const { name } = req.body
        const { id_party } = req.params
        const { id_user } = req
        
        const createListPromoterUseCase = new CreateListPromoterUseCase()

        const result = await createListPromoterUseCase.execute({
            name,
            id_party,
            id_user
        })

        return res.status(201).json(result)
    }
}