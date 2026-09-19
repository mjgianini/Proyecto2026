const express = require("express");

const servidoresRoutes = require("./routes/servidores.routes");
const basesRoutes = require("./routes/bases.routes");
const redRoutes = require("./routes/red.routes");

const app = express();

app.use(express.json());

app.use("/servidores", servidoresRoutes);
app.use("/bases", basesRoutes);
app.use("/red", redRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});