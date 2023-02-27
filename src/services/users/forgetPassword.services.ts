import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/appError";
import { createTransport } from "nodemailer"
import * as crypto from "crypto"
import bcrypt from "bcryptjs"

const forgetPasswordService = async (email: string): Promise<void> => {

  const userRepository = AppDataSource.getRepository(User)

  const findUser = await userRepository.findOne({where: {email: email}})

  if (!findUser) {
    throw new AppError("User not found");
  }

const transport = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: "motorsshop_teste@hotmail.com",
        pass: "projectm6."
    }
})
  
  const newPassword = crypto.randomBytes(4).toString("hex")

  transport.sendMail({
    from: "motorsshop_teste@hotmail.com",
    to: `${email}`,
    subject: "Recuperação de senha - Motors Shop",
    html: `<p> Olá, sua nova senha é ${newPassword}</p> <br/> <a href='http://localhost:3000/login'>Fazer login</a>`
  }).then(async ()=> {
    const password = await bcrypt.hash(newPassword, 8)

    await userRepository.update(findUser.id, {password})
  })
};

export { forgetPasswordService };
