import { Request, Response } from "express"
import { deleteUserService } from "../../services/users/deleteUser.service"

const deleteUserController = async (request: Request, response: Response) => {
 const id = request.user.id

 const userDeleted = await deleteUserService(id)
 
 return response.status(204).json(userDeleted)
}

export { deleteUserController }