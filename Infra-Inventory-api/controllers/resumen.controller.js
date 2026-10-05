const service = require("../services/resumen.service");

function obtenerResumen(req, res) {
    const resumen = service.obtenerResumen();

    res.status(200).json(resumen);
}

module.exports = {
    obtenerResumen
};