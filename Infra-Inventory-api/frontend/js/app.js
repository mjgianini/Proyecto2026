let servidorEditandoId = null;
let servidores = [];

async function cargarServidores() {

    try {

        const response = await fetch("/servidores");

        if (!response.ok) {
            throw new Error("Error al consultar los servidores");
        }

        const data = await response.json();
        servidores = data;

        const container = document.getElementById("servidores-container");

        let html = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>IP</th>
                        <th>Ambiente</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;

        data.forEach(servidor => {
            html += `
                <tr>
                    <td>${servidor.id}</td>
                    <td>${servidor.nombre}</td>
                    <td>${servidor.ip}</td>
                    <td>${servidor.ambiente}</td>
                    <td>${servidor.tipo}</td>
                    <td>
                        <button class="btn-editar" data-id="${servidor.id}">
                            Editar
                        </button>

                        <button class="btn-eliminar" data-id="${servidor.id}">
                            Eliminar
                        </button>
                     </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        container.innerHTML = html;

    } catch (error) {

        console.error("Error:", error);

    }
}



// Cargar servidores al abrir la página
cargarServidores();

const form = document.getElementById("servidor-form");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nuevoServidor = {
        nombre: document.getElementById("nombre").value,
        ip: document.getElementById("ip").value,
        ambiente: document.getElementById("ambiente").value,
        tipo: document.getElementById("tipo").value
    };

    try {

        const url = servidorEditandoId
        ? `/servidores/${servidorEditandoId}`
        : "/servidores";

        const metodo = servidorEditandoId ? "PUT" : "POST";

        const response = await fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoServidor)
        });

        if (!response.ok) {
            throw new Error("No se pudo crear el servidor");
        }

        const data = await response.json();

        console.log("Servidor creado:", data);

        document.getElementById("mensaje-exito").textContent =
         servidorEditandoId
        ? "Servidor actualizado correctamente."
        : "Servidor creado correctamente.";

        document.getElementById("mensaje-error").textContent = "";

        cargarServidores();

        form.reset();

        servidorEditandoId = null;

        form.querySelector("button[type='submit']").textContent = "Crear servidor";

    } catch (error) {

        document.getElementById("mensaje-error").textContent =
            "No se pudo crear el servidor.";

        document.getElementById("mensaje-exito").textContent = "";

        console.error("Error:", error);

    }

});



const servidoresContainer = document.getElementById("servidores-container");

servidoresContainer.addEventListener("click", async function(event) {

    const botonEditar = event.target.closest(".btn-editar");

    if (botonEditar) {

    const id = botonEditar.dataset.id;

    servidorEditandoId = id;

    const servidor = servidores.find(s => String(s.id) === id);

    document.getElementById("nombre").value = servidor.nombre;
    document.getElementById("ip").value = servidor.ip;
    document.getElementById("ambiente").value = servidor.ambiente;
    document.getElementById("tipo").value = servidor.tipo;
    
    form.querySelector("button[type='submit']").textContent = "Guardar cambios";
    document.getElementById("btn-cancelar").style.display = "inline";

    console.log("Servidor encontrado:", servidor);

    return;
}

    const botonEliminar = event.target.closest(".btn-eliminar");

    if (!botonEliminar) {
        return;
    }

    const id = botonEliminar.dataset.id;

    const confirmar = confirm("¿Estás seguro de eliminar este servidor?");

    if (!confirmar) {
        return;
    }

    try {

        const response = await fetch(`/servidores/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("No se pudo eliminar el servidor");
        }

        document.getElementById("mensaje-exito").textContent =
            "Servidor eliminado correctamente.";

        document.getElementById("mensaje-error").textContent = "";

        cargarServidores();

    } catch (error) {

        document.getElementById("mensaje-error").textContent =
            "No se pudo eliminar el servidor.";

        document.getElementById("mensaje-exito").textContent = "";

        console.error("Error:", error);

    }

});

const botonCancelar = document.getElementById("btn-cancelar");

botonCancelar.addEventListener("click", function() {

    form.reset();

    servidorEditandoId = null;

    form.querySelector("button[type='submit']").textContent = "Crear servidor";

    botonCancelar.style.display = "none";

});


async function cargarResumen() {

    try {

        const response = await fetch("/resumen");

        if (!response.ok) {
            throw new Error("Error al consultar el resumen");
        }

        const data = await response.json();

        const container = document.getElementById("resumen-container");

        container.innerHTML = `
            <div class="reporte">
                <h3>Servidores</h3>

                <p>Total: ${data.servidores.total}</p>
                <p>Producción: ${data.servidores.produccion}</p>
                <p>Testing: ${data.servidores.testing}</p>
            </div>
        `;

    } catch (error) {

        console.error("Error:", error);

    }

}

cargarResumen();