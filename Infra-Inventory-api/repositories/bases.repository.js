let bases = [
    {
        id: 1,
        motor: "Oracle",
        version: "19c",
        servidor: "srv-db01",
        nombre: "VENTAS",
        responsable: "Equipo DBA"
    },
    {
        id: 2,
        motor: "Oracle",
        version: "26ai",
        servidor: "srv-db01",
        nombre: "ERPPRD",
        responsable: "Equipo DBA"
    },
    {
        id: 3,
        motor: "SQL Server",
        version: "2022",
        servidor: "srv-db02",
        nombre: "RRHH",
        responsable: "Equipo DBA"
    },
    {
        id: 4,
        motor: "MySQL",
        version: "8.0",
        servidor: "srv-app01",
        nombre: "INVENTARIO",
        responsable: "Equipo DBA"
    }
];

function obtenerTodos() {
    return bases;
}

function obtenerPorId(id) {
    return bases.find(base => base.id === id) || null;
}

function crear(datos) {
    const nuevoId = bases.length > 0
        ? Math.max(...bases.map(base => base.id)) + 1
        : 1;

    const nuevaBase = {
        id: nuevoId,
        ...datos
    };

    bases.push(nuevaBase);

    return nuevaBase;
}

function actualizar(id, datos) {
    const indice = bases.findIndex(base => base.id === id);

    if (indice === -1) {
        return null;
    }

    bases[indice] = {
        id,
        ...datos
    };

    return bases[indice];
}

function eliminar(id) {
    const indice = bases.findIndex(base => base.id === id);

    if (indice === -1) {
        return false;
    }

    bases.splice(indice, 1);

    return true;
}

function buscar(filtros) {
    return bases.filter(base => {
        return Object.entries(filtros).every(([campo, valor]) => {
            return String(base[campo]).toLowerCase() === String(valor).toLowerCase();
        });
    });
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    buscar
};