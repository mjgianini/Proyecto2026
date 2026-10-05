let sistemasOperativos = [
    {
        id: 1,
        servidor: "srv-db01",
        familia: "Oracle Linux",
        version: "9.8",
        arquitectura: "x86_64",
        estado: "Activo"
    },
    {
        id: 2,
        servidor: "srv-db02",
        familia: "Windows Server",
        version: "2022",
        arquitectura: "x86_64",
        estado: "Activo"
    },
    {
        id: 3,
        servidor: "srv-app01",
        familia: "Ubuntu Server",
        version: "24.04",
        arquitectura: "x86_64",
        estado: "Activo"
    }
];

function obtenerTodos() {
    return sistemasOperativos;
}

function obtenerPorId(id) {
    return sistemasOperativos.find(sistema => sistema.id === id) || null;
}

function crear(datos) {
    const nuevoId = sistemasOperativos.length > 0
        ? Math.max(...sistemasOperativos.map(sistema => sistema.id)) + 1
        : 1;

    const nuevoSistema = {
        id: nuevoId,
        ...datos
    };

    sistemasOperativos.push(nuevoSistema);

    return nuevoSistema;
}

function actualizar(id, datos) {
    const indice = sistemasOperativos.findIndex(sistema => sistema.id === id);

    if (indice === -1) {
        return null;
    }

    sistemasOperativos[indice] = {
        id,
        ...datos
    };

    return sistemasOperativos[indice];
}

function eliminar(id) {
    const indice = sistemasOperativos.findIndex(sistema => sistema.id === id);

    if (indice === -1) {
        return false;
    }

    sistemasOperativos.splice(indice, 1);

    return true;
}

function buscar(filtros) {
    return sistemasOperativos.filter(sistema => {
        return Object.entries(filtros).every(([campo, valor]) => {
            return String(sistema[campo]).toLowerCase() === String(valor).toLowerCase();
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