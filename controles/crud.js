const conexion = require('../database/db');

exports.save = (req, res) => {
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const fecha_publicacion = req.body.fecha_publicacion;
    const editorial = req.body.editorial;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    conexion.query('INSERT INTO libro SET ?', { titulo: titulo, paginas: paginas, fecha_publicacion: fecha_publicacion, editorial: editorial }, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
}

exports.update = (req, res) => {
    const titulo = req.body.titulo;
    const paginas = req.body.paginas;
    const fecha_publicacion = req.body.fecha_publicacion;
    const editorial = req.body.editorial;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    conexion.query('UPDATE libro SET ? WHERE id = ?', [{ titulo: titulo, paginas: paginas, fecha_publicacion: fecha_publicacion, editorial: editorial }, { id: id }], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
}