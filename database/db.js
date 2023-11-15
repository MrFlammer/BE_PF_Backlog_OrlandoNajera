const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NeonGenesis_Fantasy2001",
    database: "libros",
    port: 3306
})

conexion.connect((error) => {
    if (error) {
        console.error('ERROR DE CONEXION!' + error);
        return
    }
    console.log('Conectado a la base de datos!');
})

module.exports = conexion;