const service = require("../services/red.service");

function obtenerTodos(req, res) {
    const filtros = req.query;

    if (Object.keys(filtros).length > 0) {
        const redes = service.buscar(filtros);

        return res.status(200).json(redes);
    }

    const redes = service.obtenerTodos();

    res.status(200).json(redes);
}

function obtenerPorId(req, res) {
    const id = Number(req.params.id);

    const red = service.obtenerPorId(id);

    if (!red) {
        return res.status(404).json({
            error: "Configuración de red no encontrada"
        });
    }

    res.status(200).json(red);
}

function crear(req, res) {
    const datos = req.body;

    const nuevaRed = service.crear(datos);

    res.status(201).json(nuevaRed);
}

function actualizar(req, res) {
    const id = Number(req.params.id);
    const datos = req.body;

    const redActualizada = service.actualizar(id, datos);

    if (!redActualizada) {
        return res.status(404).json({
            error: "Configuración de red no encontrada"
        });
    }

    res.status(200).json(redActualizada);
}

function eliminar(req, res) {
    const id = Number(req.params.id);

    const eliminado = service.eliminar(id);

    if (!eliminado) {
        return res.status(404).json({
            error: "Configuración de red no encontrada"
        });
    }

    res.status(204).send();
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};