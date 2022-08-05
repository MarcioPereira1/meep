import { prisma } from "../../../database/prismaClient";

interface IUpdateParty {
    id_user: string
    name: string
    start: string
    end: string
    id: string
}

export class UpdatePartyUseCase {

    async execute({ end, id_user, name, start, id }: IUpdateParty) {
        const user = await prisma.users.findUnique({
            where: {
                id: id_user
            },
        })

        const party = await prisma.parties.update({
            where: {
                id
            },
            data: {
                name,
                start,
                end
            }
        })

        return party
    }
}