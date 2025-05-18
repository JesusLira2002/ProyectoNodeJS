/*
GET- Obtener datos
POST- Almacenar/Crear datos
PATCH- Modificar una parte de un recurso(Actualizar)
PUT- Modificar un recurso
DELETE- Borrar un recurso 
*/
//const bodyParser = require('body-parser');
//Dependencies
const morgan = require('morgan');
const  express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');

//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require ('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

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