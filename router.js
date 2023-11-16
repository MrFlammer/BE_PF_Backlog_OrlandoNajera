const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//MOSTRAR REGISTROS
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM libro CROSS JOIN autor ON libro.id = autor.id_autor', (error, results) => {
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
    conexion.query('SELECT * FROM libro CROSS JOIN autor ON libro.id = autor.id_autor WHERE libro.id= ?', [id], (error, results) => {
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
    const id_autor = req.params.id_autor;
    conexion.query('DELETE FROM libro WHERE id = ?', [id], (error, resultados) => {
        if (error) {
            console.error(error);
        } else {
            conexion.query('DELETE FROM autor WHERE id_autor = ?', [id_autor], (error, results) => {
                if (error) {
                    console.error(error);
                } else {
                    res.redirect('/');
                }
            });
        };
    });
});

const crud = require('./controles/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;