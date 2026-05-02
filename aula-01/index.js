import express from "express"
import helloWorldController from "./src/controllers/hello-world-controller.js"
import ListUsersController from "./src/controllers/list-users-controller.js"
import sequelize from "sequelize"

const app = express()

const dbSequelize = new Sequelize(
    'meu_banco',
    'root',
    '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    }
)


app.get("/", helloWorldController)
app.get("/users", ListUsersController)

app.listen(8081, async (error)=> {
    await console.log("Aplicação funcionando")
})

console.log("Aplicação está funcionando")