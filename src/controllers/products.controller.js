import productService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    res.status(200).json(productService.getAllProducts());
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = productService.getProductById(id);
    if (!product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado "});
    }
};

export const saveProduct = async (req, res) => {
    const {name, price } = req.body;
    const newProduct = productService.saveProduct({ name, price });
    res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(productService.deleteProduct(id));
};