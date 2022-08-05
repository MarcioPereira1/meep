import { prisma } from "../../../database/prismaClient"

interface ICreateParty {
    name: string
    start: string
    end: string   
}

export class CreatePartyUseCase {

    async execute({ name, start, end }: ICreateParty) {

        const party = await prisma.parties.create({
            data: {
                name,
                start,
                end
            }
        })

        return party
    }
}

