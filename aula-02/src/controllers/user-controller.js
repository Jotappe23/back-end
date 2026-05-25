import { listUsersRepository } from "../repositories/user-repository.js"

export async function listUsersController (request, response) {
        try {
            const users = await listUsersRepository()
            return response
                .status(200)
                .json(users)
        } catch (error) {
        return response
            .status(500)
            .json(error.message)
        }
    }

export async function createUserController (request, response) {
    try {
        const user = request.body
        return user
        return createUserService(user)
    } catch (error) {
        return response
            .status(500)
            .json(error.message)
    }
}