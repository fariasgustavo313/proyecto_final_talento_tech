import express from "express";
const router = express.Router();

router.get("/api/products");
router.get("/api/products/:id");
router.post("/api/products/create");
router.delete("/api/products/:id");