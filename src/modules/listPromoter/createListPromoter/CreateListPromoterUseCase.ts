import { Parties } from "@prisma/client"
import { prisma } from "../../../database/prismaClient"

interface ICreateList {
    name_list: string
    name_party: string
}

export class CreateListPromoterUseCase {

    async execute({ name_list, name_party }: ICreateList) {
        const findParty = await prisma.parties.findFirst({
            where: {
                name: {
                    equals: name_list,
                    mode: "insensitive"
                } 
            }
        })

        const list = await prisma.listPromoters.create({
            data: {
                name: name_list,
                id_party: findParty?.id,
                party: findParty
            }
        })
    }
}