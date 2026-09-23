const service = require("../services/storage.service");

function obtenerTodos(req, res) {
    const filtros = req.query;

    if (Object.keys(filtros).length > 0) {
        const storages = service.buscar(filtros);

        return res.status(200).json(storages);
    }

    const storages = service.obtenerTodos();

    res.status(200).json(storages);
}

function obtenerPorId(req, res) {
    const id = Number(req.params.id);

    const storage = service.obtenerPorId(id);

    if (!storage) {
        return res.status(404).json({
            error: "Almacenamiento no encontrado"
        });
    }

    res.status(200).json(storage);
}

function crear(req, res) {
    const datos = req.body;

    const nuevoStorage = service.crear(datos);

    res.status(201).json(nuevoStorage);
}

function actualizar(req, res) {
    const id = Number(req.params.id);
    const datos = req.body;

    const storageActualizado = service.actualizar(id, datos);

    if (!storageActualizado) {
        return res.status(404).json({
            error: "Almacenamiento no encontrado"
        });
    }

    res.status(200).json(storageActualizado);
}

function eliminar(req, res) {
    const id = Number(req.params.id);

    const eliminado = service.eliminar(id);

    if (!eliminado) {
        return res.status(404).json({
            error: "Almacenamiento no encontrado"
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