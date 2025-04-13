/*
GET- Obtener datos
POST- Almacenar/Crear datos
PATCH- Modificar una parte de un recurso(Actualizar)
PUT- Modificar un recurso
DELETE- Borrar un recurso 
*/
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const  express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    return res.status(200).send({ code: 1, message:"Bienvenido a la Pokedex"});
});

app.use("/pokemon", pokemon);
app.use("/user", user);


app.use((req, res, next) => {
    return res.status(404).json({ code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
});





























/*
 Verbos HTTP
    GET: RECIBIR DATOS DE UN RECURSO
    POST: ENVIAR DATOS A UN RECURSO
    PUT: ACTUALIZAR DATOS DE UN RECURSO
    DELETE: ELIMINAR DATOS DE UN RECURSO
    PATCH: ACTUALIZAR PARCIALMENTE DATOS DE UN RECURSO
 */