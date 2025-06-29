import express from "express";
import {
    getAllProducts,
    getProductById,
    saveProduct,
    deleteProduct,
    updateProduct
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/create", saveProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

export default router;