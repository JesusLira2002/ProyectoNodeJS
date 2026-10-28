API REST PokémonDescripciónEsta es una API RESTful desarrollada con Node.js para la gestión centralizada de datos y operaciones CRUD de una Pokédex. 
El sistema cuenta con endpoints estructurados mediante un sistema de enrutamiento, protege el acceso mediante la codificación de contraseñas con JSON Web Tokens (JWT) y gestiona los permisos de peticiones externas configurando CORS.   
TecnologíasEntorno: Node.js.   
Framework: Express.
Base de Datos: MySQL.
Seguridad e Integración: JWT y CORS.   

Estructura del Proyectoconfig/: Configuraciones generales de la API y de la conexión a la base de datos.   

middleware/: Funciones intermedias para manejar validaciones, como la verificación del token JWT y las cabeceras CORS.   
routes/: Controladores y definición de las rutas de los endpoints.   
pokedex.sql: Script SQL para estructurar la base de datos relacional.   
pokedex.json: Archivo con la información base de los Pokémon.   
index.js: Archivo principal de entrada para inicializar el servidor.

Autor: Jesús Eduardo Lira Prieto | Noviembre 2024
