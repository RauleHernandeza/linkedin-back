const { Client } = require('pg');
const bcrypt =require('bcryptjs')


const insert_education = async(req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const title = req.body.title;
        const date_initial = req.body.date_initial;
        const id_user = req.body.id_user;
        const id_university = req.body.university;
        const date_ending = req.body.date_ending;
        client.connect();
        await client.query('insert into education (title, date_ending, date_initial, id_user, university) values ($1, $2, $3, $4, $5) returning *', [title, date_ending, date_initial, id_user, id_university]).then(response=>{
        console.log(response.rows);
        client.end();
        res.send({status:200,body:response.rows[0]})
        })
        
        
        .catch(err=>{
            client.end();
            console.log(err)
            res.send({status:500,message:err})
        })
        
       

}

const update_education = async (req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
   
        const title = req.body.title;
        const date_initial = req.body.date_initial;
        const id_user = req.body.id_education;
        const id_university = req.body.university;
        const date_ending = req.body.date_ending;
        client.connect();
        await client.query('update education set title=$1, date_ending=$2, date_initial=$3,university=$4 where id_education=$5', [title, date_ending, date_initial,id_university , id_user]).then(response=>{
      
          console.log(response)
          client.end();
          res.send({status:200})
        })
        
        
        .catch(err=>{
            client.end();
            console.log(err)
            res.send({status:500,message:err})
        })
}



const delete_education = async (req, res) => {
    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
        const id_user = req.body.id_education;
        client.connect();
        await client.query('Delete education where id_education', [id_user]).then(response=>{
          console.log(response.rows);
        console.log('todo bien')
        client.end();
                  res.send({status:200})
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end();
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_education,
    update_education,
    delete_education
}