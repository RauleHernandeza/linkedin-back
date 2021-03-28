const { Client } = require('pg');

const client = new Client("postgres: // eiqagrbqkqxyru : 5cb4b70c4d20ef1d142ea566a7c05761bb83a0de6ba8140b45ce43bb78821e2b @ ec2-52-44-31-100.compute-1.amazonaws.com : 5432 / d1t0vrpf66i4h6")

const getusers = async(req, res) => {
    
   
        console.log('pasa por aqui 1')
        const email = req.body.email;
        const contrasena = req.body.password;
        try{
        client.connect();
       const response=await client.query('SELECT * FROM user_1 where email=$1',[email])

console.log('pasa por aqui 2')
        console.log(response)
        console.log('pasa por aqui 3')
        res.sendStatus(200).json(resp.rows);
        client.end();

        }catch{err=>{

            console.log(err)
            res.sendStatus(500).json({error:err})
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
    const residencia_actual = req.body.id_pais;
    const contrasena = req.body.password;
    const languaje = "1"
    const tipo_usuario = false;
    const response = await pool.query('insert into user_1 (name, type_user, phone, email, password, languaje, lastname, birth_date, id_country) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [nombre, tipo_usuario, telefono, email, contrasena, languaje, apellido, fecha_nac, residencia_actual]);
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