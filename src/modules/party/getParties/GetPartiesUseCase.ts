import { prisma } from "../../../database/prismaClient";


export class GetPartiesUseCase {

    async execute() {
        const parties = await prisma.parties.findMany()

        return parties
    }
}