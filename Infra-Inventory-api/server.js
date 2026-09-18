const express = require("express");

const servidoresRoutes = require("./routes/servidores.routes");

const app = express();

app.use(express.json());

app.use("/servidores", servidoresRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});