let redes = [
    {
        id: 1,
        servidor: "srv-db01",
        interfaz: "eth0",
        ip: "192.168.1.10",
        mascara: "255.255.255.0",
        gateway: "192.168.1.1",
        vlan: 100
    },
    {
        id: 2,
        servidor: "srv-db02",
        interfaz: "eth0",
        ip: "192.168.1.11",
        mascara: "255.255.255.0",
        gateway: "192.168.1.1",
        vlan: 100
    },
    {
        id: 3,
        servidor: "srv-app01",
        interfaz: "eth0",
        ip: "192.168.1.20",
        mascara: "255.255.255.0",
        gateway: "192.168.1.1",
        vlan: 200
    }
];

function obtenerTodos() {
    return redes;
}

function obtenerPorId(id) {
    return redes.find(red => red.id === id) || null;
}

function crear(datos) {
    const nuevoId = redes.length > 0
        ? Math.max(...redes.map(red => red.id)) + 1
        : 1;

    const nuevaRed = {
        id: nuevoId,
        ...datos
    };

    redes.push(nuevaRed);

    return nuevaRed;
}

function actualizar(id, datos) {
    const indice = redes.findIndex(red => red.id === id);

    if (indice === -1) {
        return null;
    }

    redes[indice] = {
        id,
        ...datos
    };

    return redes[indice];
}

function eliminar(id) {
    const indice = redes.findIndex(red => red.id === id);

    if (indice === -1) {
        return false;
    }

    redes.splice(indice, 1);

    return true;
}

function buscar(filtros) {
    return redes.filter(red => {
        return Object.entries(filtros).every(([campo, valor]) => {
            return String(red[campo]).toLowerCase() === String(valor).toLowerCase();
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