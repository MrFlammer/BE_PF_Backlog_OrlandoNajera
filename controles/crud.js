const conexion = require('../database/db');

exports.save = (req, res) => {
    const titulo = req.body.titulo;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const paginas = req.body.paginas;
    const fecha_publicacion = req.body.fecha_publicacion;
    const editorial = req.body.editorial;
    conexion.query('INSERT INTO libro SET ?', { titulo: titulo, paginas: paginas, fecha_publicacion: fecha_publicacion, editorial: editorial }, 'INSERT INTO autor SET ?', { nombre: nombre, apellidos: apellidos }, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
}