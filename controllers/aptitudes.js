const { Client } = require('pg');
const bcrypt =require('bcryptjs')


const insert_aptitudes = async(req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const title = req.body.title;
        const id_user = req.body.id_user;
        
        client.connect();
        await client.query('insert into attribute (title, id_user) values ($1, $2) returning *', [title,id_user]).then(response=>{
        console.log(response.rows);
    
        res.send({status:200,body:response.rows[0]})
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
        
       

}

const update_aptitudes = async (req, res) => {
    
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const title = req.body.title;
      
        client.connect();
        await client.query('update atribute set title=$1 where id_atribute=$2', [title ,id_aptitudes]).then(response=>{
      
          console.log(response)
               
          res.send({status:200})
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
}



const delete_aptitudes = async (req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const id_aptitudes = req.body.aptitudes;
        client.connect();
        await client.query('Delete attribute where id_attribute=$1', [id_aptitudes]).then(response=>{
          console.log(response.rows);
        console.log('todo bien')
                  res.send({status:200})
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_aptitudes,
    update_aptitudes,
    delete_aptitudes
}