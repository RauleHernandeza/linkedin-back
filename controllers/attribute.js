const { Client } = require('pg');
const client = new Client(
    
    {connectionString:
      "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
      ssl:{
          rejectUnauthorized:false
      }

   }
    )

const insert_attribute = async(req, res) => {

        const title = req.body.title;
        const validated = req.body.validated;
        const id_user = req.body.id_user;
        client.connect();

        await client.query('insert into attribute (title, validated, id_user) values ($1, $2, $3) returning *', [title, validated, id_user]).then(response=>{
    
        console.log(response.rows);
        client.end()
        })
        
        
        .catch(err=>{
            client.end()
            console.log(err)
            res.send({status:500,message:err})
        })
        
       

}

const update_attribute = async (req, res) => {
    
   
        const title = req.body.title;
        const validated = req.body.validated;
        const id_user = req.body.id_user;
        client.connect();
        
        await client.query('update attribute set title =$1, validated=$2 where id_user=$3', [title, validated, id_user]).then(response=>{
        client.end()
        console.log(response)

        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
}



const delete_attribute = async (req, res) => {
        
    
        const id_user = req.body.id_user;
        client.connect();
        await client.query('Delete attribute where id_user = $1', [id_user]).then(response=>{
        console.log(response.rows);
        console.log('todo bien')
        client.end()
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end()
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_attribute,
    update_attribute,
    delete_attribute
}