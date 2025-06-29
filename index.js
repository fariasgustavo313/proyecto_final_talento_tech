import dotenv from "dotenv";
dotenv.config();

console.log("Variables de entorno cargadas:", {
  apiKey: process.env.FIREBASE_API_KEY,
  jwtSecret: process.env.JWT_SECRET_KEY
});


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import { authentication } from "./src/middleware/authentication.js";

const app = express();
const PORT = 3000;

// uso basico de cors
app.use(cors());
app.use(bodyParser.json());

app.use("/api", authentication, productsRouter);
app.use("/auth", authRouter);

app.use((req, res) => {
    res.status(404).send("Recurso no encontrado o ruta no valida");
});

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});