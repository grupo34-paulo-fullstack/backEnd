import { Request, Response } from "express"
import { instanceToInstance } from "class-transformer"
import { updateUserService } from "../../services/users/updateUser.service"

const updateUserController = async (request: Request, response: Response) => {
 const id = request.user.id
 
 const data = request.body

 const updatedUser = await updateUserService(data, id)

 return response.status(200).json(instanceToInstance(updatedUser))
}

export { updateUserController }