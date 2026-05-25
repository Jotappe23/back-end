import { Product } from "../models/products.js"

export function productRepository() {
    return {
        list: async () => {
            return await Product.findAll()
        }
    }
}
