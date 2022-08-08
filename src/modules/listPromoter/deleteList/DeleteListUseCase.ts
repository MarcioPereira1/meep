import { prisma } from "../../../database/prismaClient";


export class DeleteListUseCase {

    async execute(id: string) {
        const list = await prisma.listPromoters.delete({
            where: {
                id
            }
        })

        return list
    }
}