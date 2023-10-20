# devcamp

Descripción breve del proyecto.

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas](#rutas)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos
- Node.js y npm instalados.
- Dependencias (agrega aquí cualquier dependencia específica que necesite tu proyecto).

## Instalación
1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

-npm install
## Uso
Para ejecutar el proyecto, utiliza el siguiente comando:

- npm run dev

en la carpeta config esta ya estabalecido el .env donde esta el puerto configurado en 5000

##Estructura del Proyecto
Explica aquí la estructura de directorios de tu proyecto, organizando las carpetas y archivos clave.

# Rutas

## Cursos
1. Listar todos los cursos de un bootcamp
- Método: GET
- Ruta: /cursos/bootcamp/:bootcampId
2. Listar todos los cursos en general
- Método: GET
- Ruta: /cursos
- Obtener un solo curso
- Método: GET
- Ruta: /cursos/:id
3. Crear un nuevo curso
- Método: POST
- Ruta: /cursos
4. Actualizar un curso
- Método: PUT
- Ruta: /cursos/:id
- Requisitos:
5. Eliminar un curso
- Método: DELETE
- Ruta: /cursos/:id
## Reseñas (Reviews)
1. Listar todas las reseñas de un bootcamp
- Método: GET
- Ruta: /reseñas/bootcamp/:bootcampId
2. Listar todas las reseñas en general
- Método: GET
- Ruta: /reseñas
3. Obtener una sola reseña
- Método: GET
- Ruta: /reseñas/:id
4. Crear una reseña
--Método: POST
- Ruta: /reseñas
5. Actualizar una reseña
- Método: PUT
- Ruta: /reseñas/:id
6. Eliminar una reseña
- Método: DELETE
- Ruta: /reseñas/:id
