# InfraInventory – Documentación de la API

## 1. Descripción general

InfraInventory es una aplicación para gestionar y consultar información de infraestructura informática.

La API permite administrar los siguientes recursos:

- Servidores
- Bases de datos
- Red
- Storage
- Sistemas operativos

También dispone de un endpoint de resumen general de infraestructura.

## 2. Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- API REST
- Almacenamiento en memoria

## 3. Dirección base

text
http://localhost:3000


## 4. Endpoints disponibles

### 4.1 Servidores

| Método 	| Ruta 					| Descripción 	
|--------	|----------------------	|-------------	
| GET 		| 	/servidores 		| Listar todos los servidores 
| GET 		| 	/servidores/:id 	| Consultar un servidor por ID 
| POST 		| 	/servidores 		| Crear un servidor 
| PUT 		| 	/servidores/:id 	| Actualizar un servidor 
| DELETE 	|  /servidores/:id 		| Eliminar un servidor 

### 4.2 Bases de datos

| Método 	| Ruta 					| Descripción 	
|--------	|----------------------	|-------------	
| GET 		| /bases 				| Listar todas las bases de datos 
| GET 		| /bases/:id 			| Consultar una base de datos por ID 
| POST 		| /bases 				| Crear una base de datos 
| PUT 		| /bases/:id 			| Actualizar una base de datos 
| DELETE 	| /bases/:id 			| Eliminar una base de datos 

### 4.3 Red

| Método 	| Ruta 					| Descripción 	
|--------	|----------------------	|-------------	
| GET 		| /red 					| Listar todas las interfaces de red 
| GET 		| /red/:id 				| Consultar una interfaz por ID 
| POST 		| /red 					| Crear una interfaz de red 
| PUT 		| /red/:id 				| Actualizar una interfaz de red 
| DELETE 	| /red/:id 				| Eliminar una interfaz de red 

### 4.4 Storage

| Método 	| Ruta 					| Descripción 	
|--------	|----------------------	|-------------	
| GET 		| /storage 				| Listar todas las unidades de almacenamiento 
| GET 		| /storage/:id 			| Consultar una unidad por ID 
| POST 		| /storage 				| Crear una unidad de almacenamiento 
| PUT 		| /storage/:id 			| Actualizar una unidad de almacenamiento 
| DELETE 	| /storage/:id 			| Eliminar una unidad de almacenamiento 

### 4.5 Sistemas operativos

| Método 	| Ruta 						| Descripción 	
|--------	|----------------------		|-------------	
| GET 		| /sistemas-operativos 		| Listar todos los sistemas operativos 
| GET 		| /sistemas-operativos/:id 	| Consultar un sistema operativo por ID 
| POST 		| /sistemas-operativos 		| Crear un sistema operativo 
| PUT 		| /sistemas-operativos/:id 	| Actualizar un sistema operativo 
| DELETE 	| /sistemas-operativos/:id 	| Eliminar un sistema operativo 

### 4.6 Resumen de infraestructura

| Método 	| Ruta 					| Descripción 	
|--------	|----------------------	|-------------	
| GET 		| /resumen 				| Obtener un resumen general de la infraestructura 

## 5. Parámetros de las rutas

Las rutas que contienen :id utilizan un parámetro de identificación del recurso.

Por ejemplo:


GET /servidores/1
GET /bases/2
PUT /storage/3
DELETE /red/4


En estos casos, el número representa el ID del recurso que se desea consultar, actualizar o eliminar.

## 6. Códigos de respuesta HTTP

| Código 					| Descripción 
|---------------------------|-------------------------------------------
| 200 OK 					| Solicitud procesada correctamente 
| 201 Created 				| Recurso creado correctamente 
| 204 No Content			| Recurso eliminado correctamente 
| 400 Bad Request 			| Solicitud incorrecta 
| 404 Not Found 			| Recurso no encontrado 
| 500 Internal Server Error | Error interno del servidor 


## 7. Ejemplos de uso

### 7.1 Servidores

**Crear servidor – POST /servidores**

Body (JSON):

json
{
    "nombre": "srv-postman",
    "ip": "192.168.1.50",
    "ambiente": "Testing",
    "tipo": "Virtual"
}


**Actualizar servidor – PUT /servidores/:id**

Body (JSON):

json
{
    "nombre": "srv-postman",
    "ip": "192.168.1.55",
    "ambiente": "Produccion",
    "tipo": "Fisico"
}


**Consultar servidor – GET /servidores/:id**

Permite obtener los datos de un servidor específico mediante su ID.

**Eliminar servidor – DELETE /servidores/:id**

Permite eliminar un servidor mediante su ID.

### 7.2 Bases de datos

**Crear base de datos – POST /bases**

Body (JSON):

json
{
    "motor": "PostgreSQL",
    "version": "16",
    "servidor": "srv-postman",
    "base": "INVENTARIO_TEST",
    "fecha_creacion": "2026-11-05",
    "responsable": "Jesus"
}


**Actualizar base de datos – PUT /bases/:id**

Body (JSON):

json
{
    "motor": "PostgreSQL",
    "version": "16.1",
    "servidor": "srv-postman",
    "base": "INVENTARIO_TEST",
    "fecha_creacion": "2026-11-05",
    "responsable": "Jesus"
}


**Consultar base de datos – GET /bases/:id**

Permite obtener los datos de una base de datos específica mediante su ID.

**Eliminar base de datos – DELETE /bases/:id**

Permite eliminar una base de datos mediante su ID.


### 7.3 Red

**Crear interfaz de red – POST /red**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "interfaz": "eth1",
    "ip": "192.168.1.60",
    "mascara": "255.255.255.0",
    "vlan": 20
}


**Actualizar interfaz de red – PUT /red/:id**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "interfaz": "eth1",
    "ip": "192.168.1.61",
    "mascara": "255.255.255.0",
    "vlan": 30
}


**Consultar interfaz de red – GET /red/:id**

Permite obtener los datos de una interfaz de red específica mediante su ID.

**Eliminar interfaz de red – DELETE /red/:id**

Permite eliminar una interfaz de red mediante su ID.

### 7.4 Storage

**Crear unidad de almacenamiento – POST /storage**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "tipo": "SSD",
    "capacidadGB": 1000,
    "puntoMontaje": "/datos"
}


**Actualizar unidad de almacenamiento – PUT /storage/:id**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "tipo": "SSD",
    "capacidadGB": 1500,
    "puntoMontaje": "/datos"
}


**Consultar unidad de almacenamiento – GET /storage/:id**

Permite obtener los datos de una unidad de almacenamiento específica mediante su ID.

**Eliminar unidad de almacenamiento – DELETE /storage/:id**

Permite eliminar una unidad de almacenamiento mediante su ID.

### 7.5 Sistemas operativos

**Crear sistema operativo – POST /sistemas-operativos**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "nombre": "Ubuntu Server",
    "version": "24.04",
    "arquitectura": "x86_64",
    "estado": "Activo"
}


**Actualizar sistema operativo – PUT /sistemas-operativos/:id**

Body (JSON):

json
{
    "servidor": "srv-postman",
    "nombre": "Ubuntu Server",
    "version": "24.04.1",
    "arquitectura": "x86_64",
    "estado": "Activo"
}


**Consultar sistema operativo – GET /sistemas-operativos/:id**

Permite obtener los datos de un sistema operativo específico mediante su ID.

**Eliminar sistema operativo – DELETE /sistemas-operativos/:id**

Permite eliminar un sistema operativo mediante su ID.

### 7.6 Resumen de infraestructura

**Consultar resumen – GET /resumen**

Permite obtener información consolidada de los recursos administrados por InfraInventory.

La respuesta incluye:

- Cantidad total de servidores y distribución por ambiente.
- Cantidad de bases de datos y distribución por motor.
- Cantidad de interfaces de red y VLANs.
- Cantidad de unidades de almacenamiento y capacidad total.
- Distribución del almacenamiento por tipo.
- Cantidad de sistemas operativos y distribución por familia.

**Ejemplo de respuesta (JSON):**

json
{
    "servidores": {
        "total": 3,
        "produccion": 2,
        "testing": 1
    },
    "bases": {
        "total": 4,
        "oracle": 2,
        "sqlServer": 1,
        "mysql": 1
    },
    "red": {
        "interfaces": 3,
        "vlans": 2
    },
    "storage": {
        "unidades": 4,
        "capacidadTotalGB": 4500,
        "porTipo": {
            "ssd": 3,
            "hdd": 1
        }
    },
    "sistemasOperativos": {
        "total": 3,
        "activos": 3,
        "porFamilia": {
            "oracle linux": 1,
            "windows server": 1,
            "ubuntu server": 1
        }
    }
}

