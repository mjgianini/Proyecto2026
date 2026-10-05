const servidoresRepository = require("../repositories/servidores.repository");
const basesRepository = require("../repositories/bases.repository");
const redRepository = require("../repositories/red.repository");
const storageRepository = require("../repositories/storage.repository");
const sistemasOperativosRepository = require("../repositories/sistemas-operativos.repository");

function obtenerResumen() {
    const servidores = servidoresRepository.obtenerTodos();
    const bases = basesRepository.obtenerTodos();
    const redes = redRepository.obtenerTodos();
    const storages = storageRepository.obtenerTodos();
    const sistemasOperativos = sistemasOperativosRepository.obtenerTodos();

    // SERVIDORES

    const servidoresProduccion = servidores.filter(
        servidor => servidor.ambiente.toLowerCase() === "produccion"
    ).length;

    const servidoresTesting = servidores.filter(
        servidor => servidor.ambiente.toLowerCase() === "testing"
    ).length;

    // BASES

    const basesOracle = bases.filter(
        base => base.motor.toLowerCase() === "oracle"
    ).length;

    const basesSqlServer = bases.filter(
        base => base.motor.toLowerCase() === "sql server"
    ).length;

    const basesMySQL = bases.filter(
        base => base.motor.toLowerCase() === "mysql"
    ).length;

    // RED

    const vlans = new Set(
        redes
            .filter(red => red.vlan !== undefined)
            .map(red => red.vlan)
    ).size;

    // STORAGE

    const capacidadTotalGB = storages.reduce(
        (total, storage) => total + storage.capacidadGB,
        0
    );

    const storagePorTipo = {};

    storages.forEach(storage => {
        const tipo = storage.tipo.toLowerCase();

        if (!storagePorTipo[tipo]) {
            storagePorTipo[tipo] = 0;
        }

        storagePorTipo[tipo]++;
    });

    // SISTEMAS OPERATIVOS

    const sistemasOperativosActivos = sistemasOperativos.filter(
        sistema => sistema.estado.toLowerCase() === "activo"
    ).length;

    const sistemasOperativosPorFamilia = {};

    sistemasOperativos.forEach(sistema => {
        const familia = sistema.familia.toLowerCase();

        if (!sistemasOperativosPorFamilia[familia]) {
            sistemasOperativosPorFamilia[familia] = 0;
        }

        sistemasOperativosPorFamilia[familia]++;
    });

    // RESUMEN

    return {
        servidores: {
            total: servidores.length,
            produccion: servidoresProduccion,
            testing: servidoresTesting
        },

        bases: {
            total: bases.length,
            oracle: basesOracle,
            sqlServer: basesSqlServer,
            mysql: basesMySQL
        },

        red: {
            interfaces: redes.length,
            vlans: vlans
        },

        storage: {
            unidades: storages.length,
            capacidadTotalGB: capacidadTotalGB,
            porTipo: storagePorTipo
        },

        sistemasOperativos: {
            total: sistemasOperativos.length,
            activos: sistemasOperativosActivos,
            porFamilia: sistemasOperativosPorFamilia
        }
    };
}

module.exports = {
    obtenerResumen
};