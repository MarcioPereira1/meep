import { Request, Response } from "express";
import { GetPartiesUseCase } from "./GetPartiesUseCase";


export class GetPartiesController {

    async handle(req: Request, res: Response) {
        
        const getPartiesUseCase = new GetPartiesUseCase()

        const result = await getPartiesUseCase.execute()

        return res.json(result)
    }
}