import { prisma } from "../../../database/prismaClient"
import { AppError } from "../../../errors/AppError"

interface IAddGuests {
    id_user: string
    id_listPromoter: string
    cpfGuest: string
}

export class AddGuestUseCase {

    async execute({ id_user, cpfGuest, id_listPromoter }: IAddGuests) {
        const user = await prisma.users.findUnique({
            where: {
                id: id_user
            },
        })

        const promoter = await prisma.listPromoters.findUnique({
            where: {
                id: id_listPromoter
            }
        })

        if(!promoter) {
            throw new AppError("Promoter list not found")
        }

        const findGuest = await prisma.listPromoters.findFirst({
            where: {
                guests: {
                    hasSome: cpfGuest
                }
            }
        })

        if(findGuest) {
            throw new AppError("Guest already exists in that list")
        }

        const guest = await prisma.listPromoters.update({
            where: {
                id: promoter.id,
            },
            data: {
                guests: {
                    push: cpfGuest
                },
            }
        })

        const qtdGuest = await prisma.listPromoters.update({
            where: {
                id: promoter.id
            },
            data: {
                qtdGuest: guest.guests.length
            },
            select: {
                id: true,
                id_party: true,
                name: true,
                qtdGuest: true,
                guests: true
            }
        })

        return qtdGuest
    }
}