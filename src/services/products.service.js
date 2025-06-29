import * as productService from "../models/products.model.js";

export const getAllProducts = () => {
    return productService.getAllProducts();
};

export const getProductById = async (id) => {
    return productService.getProductById(id);
};

export const saveProduct = async (product) => {
    return productService.saveProduct(product);
};

export const deleteProduct = async (id) => {
    return productService.deleteProduct(id);
};

export const updateProduct = async (id, updatedProduct) => {
    return productService.updateProduct(id, updatedProduct);
};