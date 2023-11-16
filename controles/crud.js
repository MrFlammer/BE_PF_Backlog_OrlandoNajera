const conexion = require('../database/db');

exports.save = (req, res) => {
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const publicacion = req.body.publicacion;
    const editorial = req.body.editorial;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    conexion.query('INSERT INTO libro SET ?', { titulo: titulo, paginas: paginas, publicacion: publicacion, editorial: editorial }, (error, results) => {
        /*if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }*/
        if (error) {
            console.error(error);
        } else {
            conexion.query('INSERT INTO autor SET ?', { nombre: nombre, apellidos: apellidos }, (error, results) => {
                if (error) {
                    console.error(error);
                } else {
                    res.redirect('/');
                }
            });
        };
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const publicacion = req.body.publicacion;
    const editorial = req.body.editorial;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    conexion.query('UPDATE libro JOIN autor SET ? WHERE libro.id = ? AND autor.id_autor = libro.id', [{ titulo: titulo, paginas: paginas, publicacion: publicacion, editorial: editorial, nombre: nombre, apellidos: apellidos }, id], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    });
};

