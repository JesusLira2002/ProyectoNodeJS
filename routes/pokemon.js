const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).json(req.body);
});

pokemon.get('/', async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json({ code: 1, message: pkmn});
});

pokemon.get('/:id([0-9]{1,3})', async(req, res, next) => {
    const id = req.params.id - 1;    
    if (id >= 1 && id <= 722) {
        const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_id="+id+";");
        return res.status(200).json({code :1, message:pkmn});
        } 
        return res.status(404).json({
            code: 404,
            message: "Pokémon no encontrado",
            hint1: "El ID del Pokémon tiene que ser desde 1 y hasta 722",
            hint2: "Recuerda que es la primera generación de Pokémon",
            hint3: "Verifica que el ID ingresado sea un número válido"
        });
        
});

pokemon.get('/:name([A-Za-z]+)', async(req, res, next) => {
    const name = req.params.name;
    const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_name='"+name+"';");{ 
    if (pkmn.length > 0) {
        return res.status(200).json({code :1, message:pkmn});
    } 
    return res.status(404).json({
        code: 404,
        message: "Pokémon no encontrado",
        hint1: "Asegúrate de escribir correctamente el nombre del Pokémon",
        hint2: "El nombre debe coincidir con el registrado en la base de datos",
        hint3: "Recuerda que los nombres no son sensibles a mayúsculas o minúsculas"
    });
}
}
);

module.exports = pokemon;