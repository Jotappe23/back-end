import { listUsers } from "../services/user-service.js"

async function homeController (request, response) {
    const user = listUsers()
    try{
        const users = listUsers()
        return response
            .status(500)
            .json(users)
    } catch (error) {
        console.log(error)
        return response
            .status(500)
            .json(error.message)
    }
}

export default homeController