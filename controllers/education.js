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

const insert_education = async(req, res) => {

        const title = req.body.title;
        const date_initial = req.body.date_initial;
        const id_user = req.body.id_user;
        const id_university = req.body.id_university;
        const date_ending = req.body.date_ending;
        client.connect();
        await client.query('insert into education (title, date-ending, date_initial, id_user, id_university) values ($1, $2, $3, $4, $5)', [title, date_ending, date_initial, id_user, id_university]).then(response=>{
        console.log(response.rows);
    
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
        
       

}

const update_education = async (req, res) => {
    
   
        const title = req.body.title;
        const date_initial = req.body.date_initial;
        const id_user = req.body.id_user;
        const id_university = req.body.id_university;
        const date_ending = req.body.date_ending;
        client.connect();
        await client.query('update education set title=$1, date_ending=$2, date_initial=$3 where id_user=$4 and id_university=$5', [title, date_ending, date_initial, id_user, id_university]).then(response=>{

        console.log(response)

        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
}



const delete_education = async (req, res) => {
        
        const id_user = req.body.id_user;
        const id_university = req.body.id_university;
        client.connect();
        await client.query('Delete education where id_user= $1 and id_university=$2', [id_user, id_university]).then(response=>{
        console.log(response.rows);
        console.log('todo bien')

        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_education,
    update_education,
    delete_education
}