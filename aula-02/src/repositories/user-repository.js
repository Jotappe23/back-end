import User from "../models/user.js"

export async function listUsersRepository() {
    const users = await User.findAll()

    console.log(users[0].name)
    return users
}

export async function createUserRepository(userData) {
    const user = await User.create(userData)
    return user
}