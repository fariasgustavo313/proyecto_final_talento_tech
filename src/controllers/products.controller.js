import productService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado "});
    }
};

export const saveProduct = async (req, res) => {
    const { name, price } = req.body;
    const newProduct = await productService.saveProduct({ name, price });
    res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await productService.deleteProduct(id);
    res.status(200).json({ message: "Producto eliminado" });
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    try {
        await productService.updateProduct(id, updatedProduct);
        res.status(200).json({ message: "Producto actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto", error});
    }
};