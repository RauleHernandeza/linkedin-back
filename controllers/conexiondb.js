const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'linkedin',
    port: '5432' 
})

const p1 = async (req, res) => {
    console.log('pase por aqui 1')
    try{
    const res = await pool.query('SELECT * FROM usuario');
    alert('pase por aqui')
    console.log('pase por aqui 2')
    console.warn('pase por aqui')
    res.status(200).json(res.rows);
    }
    catch(err){
        res.send(err);
    }

}

const postusers = async (req, res) => {
    
    try{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contras = req.body.contras;
    const adminn = false;
    const response = await pool.query('insert into usuario values ($1, $2, $3, $4, $5)', [email, contras , nombre, apellido, adminn]);
    console.log('todo bien')
    }
    catch(err){
        res.send('error en la creacion de usuario ' + err);
    }

}

module.exports = {
    p1,
    postusers
}