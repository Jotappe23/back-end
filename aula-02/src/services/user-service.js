import { listUsersRepository } from "../repositories/user-repository.js"
export async function listUsers() {
    try {
        return await listUsersRepository()
    } catch (error) {
        throw new Error("Erro ao listar usuários")
    }
}

export async function createUserService(user) {
    try {
        return await createUserService(user)
    } catch (error){
        throw new Error(`Não foi possível criar o usuário: ${user}`)
    }
}
