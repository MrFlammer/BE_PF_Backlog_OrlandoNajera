const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAR REGISTROS
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM libro', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    })
})

//CREAR REGISTROS
router.get('/create', (req, res) => {
    res.render('create');
});

module.exports = router;