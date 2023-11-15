const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAR REGISTROS
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM libro LEFT JOIN autor ON libro.id = autor.id', (error, results) => {
        if (error) {
            return console.log('error:' + error);
        } else {
            res.render('index', { results: results });
        };
    });
});

//CREAR REGISTROS
router.get('/create', (req, res) => {
    res.render('create');
});

const crud = require('./controles/crud');
router.post('/save', crud.save);

module.exports = router;