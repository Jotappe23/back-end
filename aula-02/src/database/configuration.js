import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "meu_banco",
    "root",
    "", {
    port: 3306,
    host: "localhost",
    dialect: "mysql",
})