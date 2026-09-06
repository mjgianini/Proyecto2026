const service = require("../services/bases.service");

function obtenerBases(req, res) {

    const filtros = {
        motor: req.query.motor,
        version: req.query.version,
        servidor: req.query.servidor
    };
    
    const bases = service.obtenerBases(filtros);

    res.json(bases);

}

function obtenerBasesPorId(req, res) {

    const id = Number(req.params.id);

    
    if(Number.isNaN(id)){
        return res.status(400).json({
            error: "Los datos son invalidos."
        });
    }

    const bases = service.obtenerBasesPorId(id);

      if(!bases){
        return res.status(404).json({
            error: "Base de datos no encontrada"
        });
    }

   res.json(bases);

}

module.exports = {

    obtenerBases,obtenerBasesPorId

};