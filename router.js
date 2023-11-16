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

//EDITAR REGISTROS
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM libro WHERE id=?', [id], (error, results) => {
        if (error) {
            return console.log('error:' + error);
        } else {
            res.render('edit', { libro: results[0] });
        };
    })
});

//ELIMINAR REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, resultados) => {
        if (error) {
            return console.log('error:' + error);
        } else {
            res.redirect('/');
        };
    })
})

const crud = require('./controles/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;