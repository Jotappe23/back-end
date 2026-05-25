import { Router } from "express"
import homeController from "../controllers/home-controller.js"
import { listUsersController, createUserController } from "../controllers/user-controller.js"
import productController from "../controllers/product-controller.js"

const routes = Router()

routes.get("/", homeController)
routes.get("/user", listUsersController)
routes.post("/user", createUserController)
routes.get("/products", productController().list)

export default routes