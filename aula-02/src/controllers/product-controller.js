import { productService } from "../services/product-service.js"

function productController() {
    return {
        list: async (request, response) => {
            const service = productService()
            const products =  await service.list()
            return response
                .status(200)
                .json(products)
        }
    }
}

export default productController