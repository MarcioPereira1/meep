import { prisma } from "../../../database/prismaClient";


export class GuestsFromAListUseCase {

    async execute(id_listPromoter: string) {
        const list = await prisma.listPromoters.findMany({
            where: {
                id: id_listPromoter
            },
            select: {
                id: true,
                id_party: true,
                name: true,
                qtdGuest: true,
                guests: true
            }
        })

        return list
    }
}