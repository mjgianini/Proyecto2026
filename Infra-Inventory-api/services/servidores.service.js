const repository = require("../repositories/servidores.repository");

function obtenerTodos() {
    return repository.obtenerTodos();
}

function obtenerPorId(id) {
    return repository.obtenerPorId(id);
}

function crear(datos) {
    return repository.crear(datos);
}

function actualizar(id, datos) {
    return repository.actualizar(id, datos);
}

function eliminar(id) {
    return repository.eliminar(id);
}

function buscar(filtros) {
    return repository.buscar(filtros);
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    buscar
};