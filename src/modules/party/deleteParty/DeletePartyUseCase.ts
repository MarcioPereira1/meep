import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface IDeleteParty {
    id: string
    id_user: string
}

export class DeletePartyUseCase {

    async execute({ id_user, id }:IDeleteParty) {
        const user = await prisma.users.findUnique({
            where: {
                id: id_user
            },
        })

        const findParty = await prisma.parties.findUnique({
            where: {
                id
            }
        })

        if(!findParty) {
            throw new AppError("Party not found")
        }

        const party = await prisma.parties.delete({
            where: {
                id: findParty.id
            }
        })

        return party
    }
}