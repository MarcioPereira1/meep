import { Parties } from "@prisma/client"
import { prisma } from "../../../database/prismaClient"
import { AppError } from "../../../errors/AppError"

interface ICreateList {
    name_list: string
    id_user: string
    id_party: string
}

export class CreateListPromoterUseCase {

    async execute({ name_list, id_user, id_party }: ICreateList) {
        const user = await prisma.users.findUnique({
            where: {
                id: id_user
            },
        })

        const findParty = await prisma.parties.findFirst({
            where: {
                id: id_party
            }
        })

        if(!findParty) {
            throw new AppError("Party not found")
        }

        const list = await prisma.listPromoters.create({
            data: {
                name: name_list,
                party: {
                    connect: {
                        id: findParty?.id
                    }
                }
            }
        })

        return list
    }
}