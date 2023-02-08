var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'usuarios',
    password: ''
});

connection.connect(function(error){
    if(error){
        throw error
    }
    else{
        console.log('Successfully connection')
    }
});

//INSERTAR
connection.query('INSERT INTO usuarios (nombre, apellido) VALUES ("Braulio", "Díaz"), ("Karla", "Gallegos")', function(error, result){
    if (error) {
        throw error
    }
    else {
        console.log('Added user: ', result)
    }
});

//ACTUALIZAR
connection.query('UPDATE usuarios set nombre ="Mariana", apellido ="Gajardo" WHERE id=1', function(error, result){
    if (error) {
        throw error
    }
    else {
        console.log('Updated user: ', result)
    }
});

//ELIMINAR
connection.query('DELETE FROM usuarios WHERE id = 3', function(error, result){
    if (error) {
        throw error
    }
    else {
        console.log('Deleted user: ', result)
    }
});

//MOSTRAR
connection.query('select nombre, apellido from usuarios', function(error, results){
    if (error) {
        throw error
    } else {
        results.forEach(result => {
            console.log(result)
        });
    }
});

connection.end();