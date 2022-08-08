import { prisma } from "../../../database/prismaClient";


export class GetListPromoterUseCase {

    async execute() {
        const lists = await prisma.listPromoters.findMany({
            select: {
                id: true,
                id_party: true,
                name: true,
                qtdGuest: true,
                created_at: true
            }
        })

        return lists
    }
}