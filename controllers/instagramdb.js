const { Client } = require('pg');
const bcrypt =require('bcryptjs')
const client = new Client(
    
    {connectionString:
      "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
      ssl:{
          rejectUnauthorized:false
      }

   }
    )

const getusers = async(req, res) => {
    
   
        console.log('pasa por aqui 1')
        const email = req.body.email;
        const contrasena =   req.body.password
        console.log(req.body);
       client.connect();
      await client.query('SELECT * FROM user_1 where email=$1',[email]).then(response=>{
                
        
        let resp=response.rows[0];
                         console.log(resp);
                      console.log(response.rows)               
               
                  if(!!!resp){
                  if(bcrypt.compareSync(contrasena,resp.password)){
                      res.send({status:200,body:response.rows})
                  }else {
                    res.send({status:400,message:"usuaio o  contrasena invalidos"})   
                  }
                }else{
                    
                    res.send({status:400,message:"usuaio o  contrasena invalidos"}) 
                }
                
        })
        .catch ((err)=>{
          
            console.log(err)
            res.send({message:err})
        })
        
        
       

}

const postusers = async (req, res) => {
    
   
    console.log(req.body);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const fecha_nac = req.body.fecha_nac;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const residencia_actual =parseInt( req.body.id_pais);
    const contrasena = bcrypt.hashSync(req.body.password,10) ;
    const languaje = "1"
    const tipo_usuario = false;
    client.connect();
    
    await client.query('insert into user_1 (name, type_user, phone, email, password, languaje, lastname, birth_date, id_country) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *', [nombre, tipo_usuario, telefono, email, contrasena, languaje, apellido, fecha_nac, residencia_actual]).then(response=>{

console.log(response.rows);
    res.send({status:200,body:response.rows});
    
    console.log('todo bien')

    })
    
    
    .catch(err=>{
        console.log(err)
        res.send({status:500,message:err})
    })
}

module.exports = {
    getusers,
    postusers
}