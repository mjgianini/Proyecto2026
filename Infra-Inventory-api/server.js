const express = require("express");

const app = express();

const basesRoutes = require("./routes/bases.routes");

app.use(basesRoutes);

app.listen(3000, () => {

    console.log("Servidor iniciado en http://localhost:3000");

});


