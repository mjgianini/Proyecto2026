# InfraInventory API

## Descripción general

InfraInventory API es una API REST orientada a la gestión e inventario de infraestructura tecnológica de una organización.

El backend tiene como objetivo centralizar y facilitar la consulta y administración de información relacionada con los distintos componentes que forman parte de una infraestructura de IT, como servidores, bases de datos, sistemas operativos, equipamiento de red y dispositivos de almacenamiento.

El sistema busca resolver el problema de mantener información de infraestructura distribuida y poco estructurada, permitiendo disponer de un inventario organizado y accesible mediante una API.

Inicialmente, el proyecto se enfoca en la gestión de servidores y bases de datos, registrando información como servidor, sistema operativo, motor de base de datos, versión y nombre de la base. En futuras etapas se incorporarán otros componentes de infraestructura para ampliar el alcance del inventario.

La API está desarrollada utilizando Node.js y Express, aplicando una arquitectura basada en la separación de responsabilidades entre rutas, controladores, servicios y repositorios.

Esta organización permite mantener un código modular y facilita la incorporación de nuevos recursos y funcionalidades.

El backend será utilizado como base para implementar y documentar diferentes operaciones HTTP sobre los recursos de infraestructura, aplicando conceptos de rutas, parámetros, query parameters, cuerpos JSON y códigos de estado HTTP.