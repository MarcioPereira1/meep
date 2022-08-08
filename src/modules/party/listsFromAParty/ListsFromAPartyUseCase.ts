import { prisma } from "../../../database/prismaClient";


export class ListsFromAPartyUseCase {

    async execute(id_party: string) {
        const lists = await prisma.parties.findMany({
            where: {
                id: id_party
            },
            select: {
                name: true,
                listPromoters: true
            }
        })

        return lists
    }
}