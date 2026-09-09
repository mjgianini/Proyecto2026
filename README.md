# InfraInventory API

## Descripción general

InfraInventory API es una API REST orientada a la gestión e inventario de infraestructura tecnológica de una organización.

El backend tiene como objetivo centralizar y facilitar la consulta y administración de información relacionada con los distintos componentes que forman parte de una infraestructura de IT, como servidores, bases de datos, sistemas operativos, equipamiento de red y dispositivos de almacenamiento.

El sistema busca resolver el problema de mantener información de infraestructura distribuida y poco estructurada, permitiendo disponer de un inventario organizado y accesible mediante una API.

Inicialmente, el proyecto se enfoca en la gestión de servidores y bases de datos, registrando información como servidor, sistema operativo, motor de base de datos, versión y nombre de la base. En futuras etapas se incorporarán otros componentes de infraestructura para ampliar el alcance del inventario.

La API está desarrollada utilizando Node.js y Express, aplicando una arquitectura basada en la separación de responsabilidades entre rutas, controladores, servicios y repositorios.

Esta organización permite mantener un código modular y facilita la incorporación de nuevos recursos y funcionalidades.

El backend será utilizado como base para implementar y documentar diferentes operaciones HTTP sobre los recursos de infraestructura, aplicando conceptos de rutas, parámetros, query parameters, cuerpos JSON y códigos de estado HTTP.


--- Documentación de cada endpoint ---

2.1 Recurso /servidores

El recurso /servidores permite administrar la información de los servidores que forman parte de la infraestructura registrada en InfraInventory API.

GET /servidores
Elemento					Descripción
Ruta						/servidores
Verbo HTTP					GET
Propósito					Obtiene el listado de todos los servidores registrados en el inventario.
Parámetros					No requiere parámetros para obtener el listado completo.
Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	Se obtiene el listado de servidores.
500 Internal Server Error	Error interno	Se produjo un error inesperado al procesar la consulta.
________________________________________
GET 	/servidores/:id
Elemento				Descripción
Ruta					/servidores/:id
Verbo HTTP				GET
Propósito				Obtiene la información de un servidor específico.
Parámetro de ruta		id → Identificador del servidor.
Ejemplo:
GET /servidores/1
Respuestas posibles:
Código	Significado	Situación
200 OK						Consulta exitosa	El servidor existe y se devuelve su información.
404 Not Found				Recurso inexistente	No existe un servidor con el id solicitado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.
________________________________________
POST /servidores
Elemento				Descripción
Ruta					/servidores
Verbo HTTP				POST
Propósito				Registra un nuevo servidor en el inventario.
Body esperado:
{
  "nombre": "srv-db01",
  "ip": "192.168.1.10",
  "ambiente": "Produccion",
  "tipo": "Virtual"
}
Respuestas posibles:
Código						Significado	Situación
201 Created					Recurso creado	El servidor fue registrado correctamente.
400 Bad Request				Solicitud incorrecta	Faltan datos requeridos o el formato es incorrecto.
500 Internal Server Error	Error interno	Se produjo un error inesperado.
________________________________________
PUT /servidores/:id
Elemento					Descripción
Ruta						/servidores/:id
Verbo HTTP					PUT
Propósito					Actualiza la información de un servidor existente.
Parámetro de ruta			id → Identificador del servidor a modificar.
Body esperado:
{
  "nombre": "srv-db01",
  "ip": "192.168.1.20",
  "ambiente": "Produccion",
  "tipo": "Virtual"
}
Respuestas posibles:
Código						Significado	Situación
200 OK						Operación exitosa	El servidor fue actualizado correctamente.
400 Bad Request				Solicitud incorrecta	Los datos enviados no cumplen el formato esperado.
404 Not Found				Recurso inexistente	No existe el servidor indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.
________________________________________
DELETE /servidores/:id
Elemento					Descripción
Ruta						/servidores/:id
Verbo HTTP					DELETE
Propósito					Elimina un servidor del inventario.
Parámetro de ruta			id → Identificador del servidor a eliminar.
Respuestas posibles:
Código						Significado	Situación
204 No Content				Eliminación exitosa	El servidor fue eliminado correctamente.
404 Not Found				Recurso inexistente	No existe el servidor indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.
________________________________________
Consulta compuesta mediante filtros
GET /servidores?base=Oracle&version=19c
Este es el endpoint que nos permite demostrar una consulta más avanzada.
Elemento					Descripción
Ruta						/servidores
Verbo HTTP					GET
Propósito					Busca servidores aplicando filtros relacionados con las bases de datos instaladas.
Parámetros					base, version

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La búsqueda se procesó correctamente, haya o no resultados.
400 Bad Request				Solicitud incorrecta	Algún parámetro tiene un formato inválido.
500 Internal Server Error	Error interno	Se produjo un error inesperado.


2.2 Recurso /bases
El recurso /bases permite administrar la información de las bases de datos registradas dentro de la infraestructura de InfraInventory API.
GET /bases
Elemento					Descripción
Ruta						/bases
Verbo HTTP					GET
Propósito					Obtiene el listado de todas las bases de datos registradas en el inventario.
Parámetros					No requiere parámetros para obtener el listado completo.
Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	Se obtiene el listado de bases de datos.
500 Internal Server Error	Error interno	Se produjo un error inesperado al procesar la consulta.
________________________________________
GET /bases/:id
Elemento					Descripción
Ruta						/bases/:id
Verbo HTTP					GET
Propósito					Obtiene la información de una base de datos específica.
Parámetro de ruta			id → Identificador de la base de datos.

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La base existe y se devuelve su información.
404 Not Found				Recurso inexistente	No existe una base con el id solicitado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.
________________________________________
POST /bases
Elemento					Descripción
Ruta						/bases
Verbo HTTP					POST
Propósito					Registra una nueva base de datos en el inventario.
Body esperado:
{
  "motor": "Oracle",
  "version": "19c",
  "servidor": "srv-db01",
  "nombre": "VENTAS",
  "responsable": "Equipo DBA"
}
Respuestas posibles:
Código						Significado	Situación
201 Created					Recurso creado	La base fue registrada correctamente.
400 Bad Request				Solicitud incorrecta	Faltan datos requeridos o el formato es incorrecto.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

PUT /bases/:id
Elemento					Descripción
Ruta						/bases/:id
Verbo HTTP					PUT
Propósito					Actualiza la información de una base de datos existente.
Parámetro de ruta			id → Identificador de la base a modificar.
Body esperado:
{
  "motor": "Oracle",
  "version": "26ai",
  "servidor": "srv-db01",
  "nombre": "VENTAS",
  "responsable": "Equipo DBA"
}
Respuestas posibles:
Código						Significado	Situación
200 OK						Operación exitosa	La base fue actualizada correctamente.
400 Bad Request				Solicitud incorrecta	Los datos enviados no cumplen el formato esperado.
404 Not Found				Recurso inexistente	No existe la base indicada.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

DELETE /bases/:id
Elemento					Descripción
Ruta						/bases/:id
Verbo HTTP					DELETE
Propósito					Elimina una base de datos del inventario.
Parámetro de ruta			id → Identificador de la base a eliminar.
Respuestas posibles:
Código						Significado	Situación
204 No Content				Eliminación exitosa	La base fue eliminada correctamente.
404 Not Found				Recurso inexistente	No existe la base indicada.
500 Internal Server Error	Error interno	Se produjo un error inesperado.


Consulta compuesta mediante filtros
GET /bases?servidor=srv-db01&motor=Oracle&version=19c
Esta consulta permite localizar bases de datos aplicando varios criterios simultáneamente.
Elemento					Descripción
Ruta						/bases
Verbo HTTP					GET
Propósito					Busca bases de datos utilizando uno o varios criterios de filtrado.
Parámetros de consulta		servidor, motor, version

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La búsqueda se procesó correctamente, haya o no resultados.
400 Bad Request				Solicitud incorrecta	Algún parámetro tiene un formato o valor inválido.
500 Internal Server Error	Error interno	Se produjo un error inesperado.


2.3 Recurso /red
El recurso /red permite administrar la información de conectividad de los servidores registrados en InfraInventory API, incluyendo interfaces, direcciones IP, gateway y VLAN.

GET /red
Elemento					Descripción
Ruta						/red
Verbo HTTP					GET
Propósito					Obtiene el listado de todas las configuraciones de red registradas en el inventario.
Parámetros					No requiere parámetros para obtener el listado completo.
Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	Se obtiene el listado de configuraciones de red.
500 Internal Server Error	Error interno	Se produjo un error inesperado durante la consulta.

GET /red/:id
Elemento					Descripción
Ruta						/red/:id
Verbo HTTP					GET
Propósito					Obtiene una configuración de red específica.
Parámetro de ruta			id → Identificador de la configuración de red.

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La configuración existe y se devuelve su información.
404 Not Found				Recurso inexistente	No existe una configuración con el id solicitado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

POST /red
Elemento					Descripción
Ruta						/red
Verbo HTTP					POST
Propósito					Registra una nueva configuración de red asociada a un servidor.
Body esperado:
{
  "servidor": "srv-db01",
  "interfaz": "eth0",
  "ip": "192.168.1.10",
  "mascara": "255.255.255.0",
  "gateway": "192.168.1.1",
  "vlan": 100
}
Respuestas posibles:
Código						Significado	Situación
201 Created					Recurso creado	La configuración fue registrada correctamente.
400 Bad Request				Solicitud incorrecta	Faltan datos requeridos o el formato es incorrecto.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

PUT /red/:id
Elemento					Descripción
Ruta						/red/:id
Verbo HTTP					PUT
Propósito					Actualiza una configuración de red existente.
Parámetro de ruta			id → Identificador de la configuración a modificar.
Body esperado:
{
  "servidor": "srv-db01",
  "interfaz": "eth0",
  "ip": "192.168.1.20",
  "mascara": "255.255.255.0",
  "gateway": "192.168.1.1",
  "vlan": 100
}
Respuestas posibles:
Código						Significado	Situación
200 OK						Operación exitosa	La configuración fue actualizada correctamente.
400 Bad Request				Solicitud incorrecta	Los datos enviados no cumplen el formato esperado.
404 Not Found				Recurso inexistente	No existe la configuración indicada.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

DELETE /red/:id
Elemento					Descripción
Ruta						/red/:id
Verbo HTTP					DELETE
Propósito					Elimina una configuración de red del inventario.
Parámetro de ruta			id → Identificador de la configuración a eliminar.
Respuestas posibles:
Código						Significado	Situación
204 No Content				Eliminación exitosa	La configuración fue eliminada correctamente.
404 Not Found				Recurso inexistente	No existe la configuración indicada.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

Consulta compuesta mediante filtros
GET /red?servidor=srv-db01&vlan=100
Esta consulta permite localizar configuraciones de red utilizando diferentes criterios.
Elemento					Descripción
Ruta						/red
Verbo HTTP					GET
Propósito					Busca configuraciones de red aplicando uno o varios criterios de filtrado.
Parámetros de consulta		servidor, ip, interfaz, vlan

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La búsqueda se procesó correctamente, haya o no resultados.
400 Bad Request				Solicitud incorrecta	Algún parámetro tiene un formato o valor inválido.
500 Internal Server Error	Error interno	Se produjo un error inesperado.


2.4 Recurso /storage
El recurso /storage permite administrar la información relacionada con el almacenamiento utilizado por los servidores registrados en InfraInventory API, incluyendo tipo de almacenamiento, capacidad, unidad y estado.
GET /storage
Elemento					Descripción
Ruta						/storage
Verbo HTTP					GET
Propósito					Obtiene el listado de todas las unidades o recursos de almacenamiento registrados.
Parámetros					No requiere parámetros para obtener el listado completo.
Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	Se obtiene el listado de recursos de almacenamiento.
500 Internal Server Error	Error interno	Se produjo un error inesperado durante la consulta.

GET /storage/:id
Elemento					Descripción
Ruta						/storage/:id
Verbo HTTP					GET
Propósito					Obtiene un recurso de almacenamiento específico.
Parámetro de ruta			id → Identificador del recurso de almacenamiento.

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	El recurso existe y se devuelve su información.
404 Not Found				Recurso inexistente	No existe un recurso con el id solicitado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

POST /storage
Elemento					Descripción
Ruta						/storage
Verbo HTTP					POST
Propósito					Registra un nuevo recurso de almacenamiento asociado a un servidor.
Body esperado:
{
  "servidor": "srv-db01",
  "tipo": "SSD",
  "capacidadGB": 1000,
  "unidad": "/u02",
  "estado": "Activo"
}
Respuestas posibles:
Código						Significado	Situación
201 Created					Recurso creado	El recurso de almacenamiento fue registrado correctamente.
400 Bad Request				Solicitud incorrecta	Faltan datos requeridos o alguno posee un formato incorrecto.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

PUT /storage/:id
Elemento					Descripción
Ruta						/storage/:id
Verbo HTTP					PUT
Propósito					Actualiza un recurso de almacenamiento existente.
Parámetro de ruta			id → Identificador del recurso a modificar.
Body esperado:
{
  "servidor": "srv-db01",
  "tipo": "SSD",
  "capacidadGB": 2000,
  "unidad": "/u02",
  "estado": "Activo"
}
Respuestas posibles:
Código						Significado	Situación
200 OK						Operación exitosa	El recurso fue actualizado correctamente.
400 Bad Request				Solicitud incorrecta	Los datos enviados no cumplen el formato esperado.
404 Not Found				Recurso inexistente	No existe el recurso indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

DELETE /storage/:id
Elemento					Descripción
Ruta						/storage/:id
Verbo HTTP					DELETE
Propósito					Elimina un recurso de almacenamiento del inventario.
Parámetro de ruta			id → Identificador del recurso a eliminar.
Respuestas posibles:
Código						Significado	Situación
204 No Content				Eliminación exitosa	El recurso fue eliminado correctamente.
404 Not Found				Recurso inexistente	No existe el recurso indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

Consulta compuesta mediante filtros
GET /storage?servidor=srv-db01&tipo=SSD
Esta consulta permite localizar recursos de almacenamiento utilizando uno o varios criterios de filtrado.
Elemento					Descripción
Ruta						/storage
Verbo HTTP					GET
Propósito					Busca recursos de almacenamiento aplicando diferentes criterios de filtrado.
Parámetros de consulta		servidor, tipo, capacidadGB, estado

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La búsqueda se procesó correctamente, haya o no resultados.
400 Bad Request				Solicitud incorrecta	Algún parámetro tiene un formato o valor inválido.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

2.5 Recurso /sistemas-operativos
El recurso /sistemas-operativos permite administrar la información de los sistemas operativos instalados en los servidores registrados en InfraInventory API, incluyendo familia, versión, arquitectura y estado.
GET /sistemas-operativos
Elemento					Descripción
Ruta						/sistemas-operativos
Verbo HTTP					GET
Propósito					Obtiene el listado de todos los sistemas operativos registrados en el inventario.
Parámetros					No requiere parámetros para obtener el listado completo.
Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	Se obtiene el listado de sistemas operativos.
500 Internal Server Error	Error interno	Se produjo un error inesperado durante la consulta.

GET /sistemas-operativos/:id
Elemento					Descripción
Ruta						/sistemas-operativos/:id
Verbo HTTP					GET
Propósito					Obtiene un sistema operativo específico.
Parámetro de ruta			id → Identificador del sistema operativo.

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	El sistema operativo existe y se devuelve su información.
404 Not Found				Recurso inexistente	No existe un sistema operativo con el id solicitado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

POST /sistemas-operativos
Elemento					Descripción
Ruta						/sistemas-operativos
Verbo HTTP					POST
Propósito					Registra un nuevo sistema operativo asociado a un servidor.
Body esperado:
{
  "servidor": "srv-db01",
  "familia": "Oracle Linux",
  "version": "9.8",
  "arquitectura": "x86_64",
  "estado": "Activo"
}
Respuestas posibles:
Código						Significado	Situación
201 Created					Recurso creado	El sistema operativo fue registrado correctamente.
400 Bad Request				Solicitud incorrecta	Faltan datos requeridos o alguno posee un formato incorrecto.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

PUT /sistemas-operativos/:id
Elemento					Descripción
Ruta						/sistemas-operativos/:id
Verbo HTTP					PUT
Propósito					Actualiza un sistema operativo existente.
Parámetro de ruta			id → Identificador del sistema operativo a modificar.
Body esperado:
{
  "servidor": "srv-db01",
  "familia": "Oracle Linux",
  "version": "9.9",
  "arquitectura": "x86_64",
  "estado": "Activo"
}
Respuestas posibles:
Código						Significado	Situación
200 OK						Operación exitosa	El sistema operativo fue actualizado correctamente.
400 Bad Request				Solicitud incorrecta	Los datos enviados no cumplen el formato esperado.
404 Not Found				Recurso inexistente	No existe el sistema operativo indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

DELETE /sistemas-operativos/:id
Elemento					Descripción
Ruta						/sistemas-operativos/:id
Verbo HTTP					DELETE
Propósito					Elimina un sistema operativo del inventario.
Parámetro de ruta			id → Identificador del sistema operativo a eliminar.
Respuestas posibles:
Código						Significado	Situación
204 No Content				Eliminación exitosa	El sistema operativo fue eliminado correctamente.
404 Not Found				Recurso inexistente	No existe el sistema operativo indicado.
500 Internal Server Error	Error interno	Se produjo un error inesperado.

Consulta compuesta mediante filtros
GET /sistemas-operativos?servidor=srv-db01&familia=Oracle%20Linux&version=9.8
Esta consulta permite localizar sistemas operativos utilizando uno o varios criterios de filtrado.
Elemento					Descripción
Ruta						/sistemas-operativos
Verbo HTTP					GET
Propósito					Busca sistemas operativos aplicando diferentes criterios de filtrado.
Parámetros de consulta		servidor, familia, version, arquitectura, estado

Respuestas posibles:
Código						Significado	Situación
200 OK						Consulta exitosa	La búsqueda se procesó correctamente, haya o no resultados.
400 Bad Request				Solicitud incorrecta	Algún parámetro tiene un formato o valor inválido.
500 Internal Server Error	Error interno	Se produjo un error inesperado.


