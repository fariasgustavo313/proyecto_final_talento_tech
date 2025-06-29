import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// uso basico de cors
app.use(cors());
app.use(bodyParser.json());

app.use((req, res) => {
    res.status(404).send("Recurso no encontrado o ruta no valida");
});

app.listen(PORT, () => {
    console.log("Servidor corriendo");
});