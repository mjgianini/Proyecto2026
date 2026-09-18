let servidores = [
    {
        id: 1,
        nombre: "srv-db01",
        ip: "192.168.1.10",
        ambiente: "Produccion",
        tipo: "Virtual"
    },
    {
        id: 2,
        nombre: "srv-db02",
        ip: "192.168.1.11",
        ambiente: "Testing",
        tipo: "Virtual"
    },
    {
        id: 3,
        nombre: "srv-app01",
        ip: "192.168.1.20",
        ambiente: "Produccion",
        tipo: "Fisico"
    }
];

function obtenerTodos() {
    return servidores;
}

function obtenerPorId(id) {
    return servidores.find(servidor => servidor.id === id) || null;
}

function crear(datos) {
    const nuevoId = servidores.length > 0
        ? Math.max(...servidores.map(servidor => servidor.id)) + 1
        : 1;

    const nuevoServidor = {
        id: nuevoId,
        ...datos
    };

    servidores.push(nuevoServidor);

    return nuevoServidor;
}

function actualizar(id, datos) {
    const indice = servidores.findIndex(servidor => servidor.id === id);

    if (indice === -1) {
        return null;
    }

    servidores[indice] = {
        id,
        ...datos
    };

    return servidores[indice];
}

function eliminar(id) {
    const indice = servidores.findIndex(servidor => servidor.id === id);

    if (indice === -1) {
        return false;
    }

    servidores.splice(indice, 1);

    return true;
}

function buscar(filtros) {
    return servidores.filter(servidor => {
        return Object.entries(filtros).every(([campo, valor]) => {
            return String(servidor[campo]).toLowerCase() === String(valor).toLowerCase();
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