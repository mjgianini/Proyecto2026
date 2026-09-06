 const bases= [

        {
            id: 1,
            motor: "Oracle",
            version: "26ai",
            servidor: "srv-db01",
            base: "ERPPRD"
        },

        {
            id: 2,
            motor: "SQL Server",
            version: "2022",
            servidor: "srv-db02",
            base: "RRHH"
        },
                {
            id: 3,
            motor: "Oracle",
            version: "19c",
            servidor: "srv-db02",
            base: "ORATST"
        }


    ];

function obtenerBases(filtros) {

   let resultado = bases;

    if (filtros.motor) {
        resultado = resultado.filter(
            base => base.motor === filtros.motor
        );
    }

    if (filtros.version) {
        resultado = resultado.filter(
            base => base.version === filtros.version
        );
    }

    if (filtros.servidor) {
        resultado = resultado.filter(
            base => base.servidor === filtros.servidor
        );
    }    

    return resultado;

}

function obtenerBasesPorId(id) {

    return bases.find(base => base.id === id);

}


module.exports = {

    obtenerBases,obtenerBasesPorId

};