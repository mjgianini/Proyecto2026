const service = require("../services/servidores.service");

function obtenerTodos(req, res) {
    const filtros = req.query;

    if (Object.keys(filtros).length > 0) {
        const servidores = service.buscar(filtros);

        return res.status(200).json(servidores);
    }

    const servidores = service.obtenerTodos();

    res.status(200).json(servidores);
}

function obtenerPorId(req, res) {
    const id = Number(req.params.id);

    const servidor = service.obtenerPorId(id);

    if (!servidor) {
        return res.status(404).json({
            error: "Servidor no encontrado"
        });
    }

    res.status(200).json(servidor);
}

function crear(req, res) {
    const datos = req.body;

    const nuevoServidor = service.crear(datos);

    res.status(201).json(nuevoServidor);
}

function actualizar(req, res) {
    const id = Number(req.params.id);
    const datos = req.body;

    const servidorActualizado = service.actualizar(id, datos);

    if (!servidorActualizado) {
        return res.status(404).json({
            error: "Servidor no encontrado"
        });
    }

    res.status(200).json(servidorActualizado);
}

function eliminar(req, res) {
    const id = Number(req.params.id);

    const eliminado = service.eliminar(id);

    if (!eliminado) {
        return res.status(404).json({
            error: "Servidor no encontrado"
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