const { Client } = require('pg');
const bcrypt =require('bcryptjs')


const insert_experience = async(req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const post = req.body.post;
        const date_initial = req.body.date_initial;
        const id_user = req.body.id_user;
        const enterprise = req.body.enterprise;
        const date_ending = req.body.date_ending;
        const description=req.body.description;
        const actualy=req.body.actually;
        const shedule=req.body.schedule;

        client.connect();
        await client.query('insert into experience (post,date_initial,date_ending,enterprise,description,actually,id_user,schedule) values ($1, $2, $3, $4, $5,$6,$7,$8) returning *', [post,date_initial,date_ending,enterprise,description,actualy,id_user,shedule]).then(response=>{
        console.log(response.rows);
        client.end();
        res.send({status:200,body:response.rows[0]})
        })
        
        
        .catch(err=>{client.end();
            console.log(err)
            res.send({status:500,message:err})
        })
        
       

}

const update_experience = async (req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
   
    const post = req.body.post;
    const date_initial = req.body.date_initial;
    const id_experience = req.body.id_experience;
    const enterprise = req.body.enterprise;
    const date_ending = req.body.date_ending;
    const description=req.body.description;
    const actualy=req.body.actually;
    const shedule=req.body.schedule;
        client.connect();
        await client.query('update experience set post=$1, date_ending=$2, date_initial=$3,enterprise=$4,description=$5,schedule=$6,actually=$7 where id_experience=$8' ,[post, date_ending, date_initial,enterprise , description,shedule,actualy,id_experience]).then(response=>{
      
          console.log(response)
          client.end();
          res.send({status:200})
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end();
            res.send({status:500,message:err})
        })
}



const delete_experience = async (req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const id_expericence = req.body.id_experience;
        client.connect();
        await client.query('Delete from experience where id_experience=$1', [id_expericence]).then(response=>{
          console.log(response.rows);
        console.log('todo bien')
        client.end();
                  res.send({status:200})
        })
        
        
        .catch(err=>{
            client.end();
            console.log(err)
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_experience,
    update_experience,
    delete_experience
}