const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'linkedin',
    port: '5432' 
})

const getusers = async (req, res) => {
    
    try{
    const ra= 'raulehernandeza@gmail.com'
    const response = await pool.query('SELECT * FROM usuario where email = $1',[ra]);
    res.status(200).json(response.rows);
    }
    catch(err){
        res.send(err);
    }

}

const postusers = async (req, res) => {
    
    try{
    console.log(req.body);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const fecha_nac = req.body.fecha_nac;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const residencia_actual = req.body.pais;
    const contrasena = req.body.password;
    const tipo_usuario = false;
    const response = await pool.query('insert into usuario (nombre, apellido, fecha_nac, telefono, email, residencia_actual, contrasena, tipo_usuario) values ($1, $2, $3, $4, $5, $6, $7, $8)', [nombre, apellido, fecha_nac, telefono, email, residencia_actual, contrasena, tipo_usuario]);
    res.status(200).json(response.rows);
    console.log('todo bien')
    }
    catch(err){
        res.send('error en la creacion de usuario ' + err);
    } 

}

module.exports = {
    getusers,
    postusers
}