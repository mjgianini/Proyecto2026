const service = require("../services/sistemas-operativos.service");

function obtenerTodos(req, res) {
    const filtros = req.query;

    if (Object.keys(filtros).length > 0) {
        const sistemasOperativos = service.buscar(filtros);

        return res.status(200).json(sistemasOperativos);
    }

    const sistemasOperativos = service.obtenerTodos();

    res.status(200).json(sistemasOperativos);
}

function obtenerPorId(req, res) {
    const id = Number(req.params.id);

    const sistemaOperativo = service.obtenerPorId(id);

    if (!sistemaOperativo) {
        return res.status(404).json({
            error: "Sistema operativo no encontrado"
        });
    }

    res.status(200).json(sistemaOperativo);
}

function crear(req, res) {
    const datos = req.body;

    const nuevoSistemaOperativo = service.crear(datos);

    res.status(201).json(nuevoSistemaOperativo);
}

function actualizar(req, res) {
    const id = Number(req.params.id);
    const datos = req.body;

    const sistemaOperativoActualizado = service.actualizar(id, datos);

    if (!sistemaOperativoActualizado) {
        return res.status(404).json({
            error: "Sistema operativo no encontrado"
        });
    }

    res.status(200).json(sistemaOperativoActualizado);
}

function eliminar(req, res) {
    const id = Number(req.params.id);

    const eliminado = service.eliminar(id);

    if (!eliminado) {
        return res.status(404).json({
            error: "Sistema operativo no encontrado"
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