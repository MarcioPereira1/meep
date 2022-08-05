import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface ICreateUser {
    name: string
    email: string
    password: string
}

export class CreateUserUseCase {

    async execute({ email, name, password }: ICreateUser) {
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        })

        if(user) {
            throw new AppError("User Already Exists")
        }

        const hashPassword = await hash(password, 10)

        const createUser = await prisma.users.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        })

        return createUser
    }
}