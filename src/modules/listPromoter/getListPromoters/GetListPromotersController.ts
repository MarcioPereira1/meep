import { Request, Response } from "express";
import { GetListPromoterUseCase } from "./GetListPromotersUseCase";


export class GetListPromotersController {

    async handle(req: Request, res: Response) {
        
        const getListPromotersUseCase = new GetListPromoterUseCase()

        const result = await getListPromotersUseCase.execute()

        return res.status(200).json(result)
    }
}