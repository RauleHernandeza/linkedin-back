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

    const insert_post = async(req, res) => {

        const post = req.body.post;
        const date_initial = req.body.date_initial;
        const enterprise = req.body.enterprise;
        const description = req.body.description;
        const date_ending = req.body.date_ending;
        const actualy = req.body.actualy;
        const id_user = req.body.id_user;
        client.connect();
        
        await client.query('insert into post (id_post, date_initial, enterprise, description, date_ending, actualy, id_user) values ($1, $2, $3, $4, $5, $6, $7)', [post, date_initial, enterprise, description, date_ending, actualy, id_user]).then(response=>{
    
        console.log(response.rows);
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
        
       

}

    const update_post = async (req, res) => {
    
   
        const post = req.body.post;
        const date_initial = req.body.date_initial;
        const enterprise = req.body.enterprise;
        const description = req.body.description;
        const date_ending = req.body.date_ending;
        const actualy = req.body.actualy;
        const id_user = req.body.id_user;
        client.connect();
        
        await client.query('update experience set post=$1, date_initial=$2, enterprise=$3, description=$4, date_ending=$5, actualy=$6 where id_user=$7', [post, date_initial, enterprise, description, date_ending, actualy, id_user]).then(response=>{

        console.log(response)

        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
}



    const delete_post = async (req, res) => {
        
        const id_user = req.body.id_user;
        client.connect();
        await client.query('Delete experience where id_user = $1', [id_user]).then(response=>{
        console.log(response)
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_post,
    update_post,
    delete_post
}