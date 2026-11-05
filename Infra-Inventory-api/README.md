# InfraInventory

## 1. Descripción general

InfraInventory es una aplicación web orientada a la gestión e inventario de infraestructura tecnológica de una organización.

Su objetivo es centralizar y facilitar la administración de información relacionada con los distintos componentes de una infraestructura de IT, permitiendo mantener un inventario organizado y consultar sus recursos desde una interfaz web y una API REST.

El sistema permite administrar servidores, bases de datos, configuraciones de red, unidades de almacenamiento y sistemas operativos.

## 2. Funcionalidades principales

La aplicación permite realizar operaciones de consulta, creación, modificación y eliminación (CRUD) sobre los siguientes recursos:

- **Servidores:** administración de servidores, direcciones IP, ambientes y tipos.
- **Bases de datos:** gestión de motores, versiones, nombres de bases y responsables.
- **Red:** administración de interfaces de red, direcciones IP, máscaras, gateway y VLAN.
- **Storage:** gestión de unidades de almacenamiento, capacidad, tipo y estado.
- **Sistemas operativos:** administración de familia, versión, arquitectura y estado.

Además, cuenta con un módulo de resumen de infraestructura que permite consultar información consolidada de los recursos registrados.

La API también permite realizar búsquedas mediante filtros utilizando parámetros de consulta (*query parameters*).

## 3. Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript del lado del servidor.
- **Express:** framework utilizado para desarrollar la API REST.
- **JavaScript:** lenguaje utilizado para el desarrollo del backend y frontend.
- **HTML:** estructura de la interfaz web.
- **CSS:** estilos y presentación de la interfaz.
- **Fetch API:** comunicación entre el frontend y el backend mediante solicitudes HTTP.
- **Almacenamiento en memoria:** los datos se administran mediante estructuras de datos en memoria.

## 4. Arquitectura del proyecto

El backend utiliza una arquitectura organizada en capas, separando las responsabilidades de cada componente:

- **Routes:** definen las rutas y los métodos HTTP disponibles.
- **Controllers:** reciben las solicitudes HTTP y gestionan las respuestas.
- **Services:** contienen la lógica de negocio de la aplicación.
- **Repositories:** administran los datos y las operaciones sobre los recursos.

El frontend se comunica con el backend mediante solicitudes HTTP utilizando Fetch API.

Esta separación permite mantener una estructura modular, facilita el mantenimiento del código y permite incorporar nuevos recursos y funcionalidades.

## 5. Estructura del proyecto

Infra-Inventory-api/
│
├── controllers/
│   ├── servidores.controller.js
│   ├── bases.controller.js
│   ├── red.controller.js
│   ├── storage.controller.js
│   ├── sistemas-operativos.controller.js
│   └── resumen.controller.js
│
├── frontend/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── index.html
│
├── repositories/
│
├── routes/
│
├── services/
│
├── node_modules/
│
├── API.md
├── package.json
├── package-lock.json
├── server.js
└── README.md

## 6. Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm

### Instalación

Clonar el repositorio:

git clone https://github.com/mjgianini/Proyecto2026.git

Ingresar al directorio del backend:

cd Proyecto2026/Infra-Inventory-api

Instalar las dependencias:

npm install

### Iniciar la aplicación

Ejecutar el servidor:

node server.js

Una vez iniciado, la aplicación estará disponible en:

http://localhost:3000

Desde esa dirección se puede acceder a la interfaz web de InfraInventory.

La API REST también estará disponible utilizando la misma dirección base.

## 7. Documentación de la API

La documentación completa de la API se encuentra en el archivo [API.md](./API.md).

Allí se detallan:

- Endpoints disponibles.
- Métodos HTTP utilizados.
- Parámetros de ruta y de consulta.
- Cuerpos de las solicitudes en formato JSON.
- Códigos de respuesta HTTP.
- Ejemplos de utilización de cada recurso.

## 8. Consideraciones sobre los datos

Actualmente, la aplicación utiliza almacenamiento en memoria para administrar la información de los recursos.

Esto significa que los datos se mantienen mientras el servidor está en ejecución. Al reiniciar la aplicación, los registros vuelven a su estado inicial.

## 9. Estado del proyecto

InfraInventory cuenta con la implementación de los recursos principales, sus operaciones CRUD, búsquedas mediante filtros, un endpoint de resumen general y una interfaz web para la gestión de servidores y visualización del resumen de infraestructura.