const { Client } = require('pg');
const bcrypt =require('bcryptjs')

const getusers = async(req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
    
    
            console.log('pasa por aqui 1')
            const email = req.body.email;
            const contrasena =   req.body.password
            console.log(req.body);
            client.connect();
            await client.query('SELECT * FROM user_1 where email=$1',[email]).then(response=>{
                    
            
            let resp=response.rows[0];
                        console.log(resp);
                        console.log(response.rows)               
                        client.end();
                    if(response.rowCount >0){
                    if(bcrypt.compareSync(contrasena,resp.password)){
                        res.send({status:200,body:response.rows})
                    }else {
        
                        res.send({status:400,message:"usuaio o  contrasena invalidos"})
                        client.end();   
                    }
                    }else{
                        
                        res.send({status:400,message:"usuaio o  contrasena invalidos"})
                        client.end(); 
                    }
                    
            })
            .catch ((err)=>{
            
                console.log(err)
                res.send({message:err})
            })
            
            
        

    }

const postusers = async (req, res) => {
    
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
    
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
            client.end();
            res.send({status:200,body:response.rows});
            console.log('todo bien')
            })
            
            
            .catch(err=>{
                console.log(err)
                client.end();
                res.send({status:500,message:err})
            })
        }


const updateusers = async (req, res) => {

    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
    
   
            console.log(req.body);
            const nombre = req.body.nombre;
            const apellido = req.body.apellido;
            const fecha_nac = req.body.fecha_nac;
            const telefono = req.body.telefono;
            const email = req.body.email;
            const curriculum = req.body.curriculum;
            const foto = req.body.foto;
            const residencia_actual =parseInt( req.body.id_pais);
            const contrasena = bcrypt.hashSync(req.body.password,10) ;
            const languaje = "1"
            const tipo_usuario = false;
            client.connect();
            
            await client.query('update user_1 set curriculum =$1, name=$2, type_user=$3, phone=$4, email=$5, password=$6, photo_profile=$7, languaje=$8, lastname=$9, birth_date=$10, id_country=$11 where email =$5', [curriculum, nombre, tipo_usuario, telefono, email, contrasena, foto, languaje, apellido, fecha_nac, residencia_actual]).then(response=>{

            console.log(response.rows);
            client.end();
            res.send({status:200,body:response.rows});
            console.log('todo bien')

            })
            
            
            .catch(err=>{
                console.log(err)
                client.end();
                res.send({status:500,message:err})
            })
        }

const deleteusers = async (req, res) => {

    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
    
   
            console.log(req.body);
            const email = req.body.email;
            const contrasena = bcrypt.hashSync(req.body.password,10) ;
            client.connect();
            await client.query('Delete from user_1 where email = $1 and password = $2', [email, contrasena]).then(response=>{
            console.log(response.rows);
            res.send({status:200,body:response.rows});
            client.end();
            console.log('todo bien')

            })
            
            
            .catch(err=>{
                console.log(err)
                client.end();
                res.send({status:500,message:err})
            })
        }


module.exports = {
    getusers,
    postusers,
    updateusers,
    deleteusers
}