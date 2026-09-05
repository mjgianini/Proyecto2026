const http = require('http');

const servidor = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Servidor funcionando correctamente');
    }

    if (req.method === 'POST' && req.url === '/archivo') {

        let totalBytes = 0;

        req.on('data', (chunk) => {
            totalBytes += chunk.length;
        });

        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Bytes recibidos: ${totalBytes}`);
        });

        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ruta no encontrada');
});

servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});