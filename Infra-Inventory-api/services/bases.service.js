const repository = require("../repositories/bases.repository");

function obtenerBases(filtros) {

    return repository.obtenerBases(filtros);

}

function obtenerBasesPorId(id) {

    return repository.obtenerBasesPorId(id);

}

module.exports = {

    obtenerBases,obtenerBasesPorId

};
