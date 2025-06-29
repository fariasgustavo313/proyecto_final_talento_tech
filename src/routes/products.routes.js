import express from "express";
import {
    getAllProducts,
    getProductById,
    saveProduct,
    deleteProduct,
    updateProduct
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getProductById);
router.post("/api/products/create", saveProduct);
router.delete("/api/products/:id", deleteProduct);
router.put("/api/products/:id", updateProduct);

export default router;