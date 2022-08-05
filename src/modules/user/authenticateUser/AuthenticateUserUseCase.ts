import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";

interface IAuthenticateUser {
    email: string
    password: string
}

export class AuthenticateUserUseCase {

    async execute({ email, password }: IAuthenticateUser) {
        const user = await prisma.users.findUnique({
            where: {
                email,
            }
        })

        if(!user) {
            throw new AppError("Email or Password invalid")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new AppError("Email or Password invalid");
        }

        const token = sign({email}, "019acc25a4e242bb55ad489832ada12d", {
            subject: user.id,
            expiresIn: "1d",
        })

        return token
    }
}