let storages = [
    {
        id: 1,
        servidor: "srv-db01",
        tipo: "SSD",
        capacidadGB: 1000,
        unidad: "/u02",
        estado: "Activo"
    },
    {
        id: 2,
        servidor: "srv-db01",
        tipo: "SSD",
        capacidadGB: 500,
        unidad: "/u03",
        estado: "Activo"
    },
    {
        id: 3,
        servidor: "srv-db02",
        tipo: "HDD",
        capacidadGB: 2000,
        unidad: "D:",
        estado: "Activo"
    },
    {
        id: 4,
        servidor: "srv-app01",
        tipo: "SSD",
        capacidadGB: 1000,
        unidad: "/data",
        estado: "Activo"
    }
];

function obtenerTodos() {
    return storages;
}

function obtenerPorId(id) {
    return storages.find(storage => storage.id === id) || null;
}

function crear(datos) {
    const nuevoId = storages.length > 0
        ? Math.max(...storages.map(storage => storage.id)) + 1
        : 1;

    const nuevoStorage = {
        id: nuevoId,
        ...datos
    };

    storages.push(nuevoStorage);

    return nuevoStorage;
}

function actualizar(id, datos) {
    const indice = storages.findIndex(storage => storage.id === id);

    if (indice === -1) {
        return null;
    }

    storages[indice] = {
        id,
        ...datos
    };

    return storages[indice];
}

function eliminar(id) {
    const indice = storages.findIndex(storage => storage.id === id);

    if (indice === -1) {
        return false;
    }

    storages.splice(indice, 1);

    return true;
}

function buscar(filtros) {
    return storages.filter(storage => {
        return Object.entries(filtros).every(([campo, valor]) => {
            return String(storage[campo]).toLowerCase() === String(valor).toLowerCase();
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