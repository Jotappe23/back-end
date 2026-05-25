import { productRepository } from "../repositories/product-repository.js"

export function productService() {
    return {
        list: async () => {
            const repository = productRepository()
            return await repository.list()
        }
    }
}

