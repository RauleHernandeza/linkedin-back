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

const insert_enterprise = async(req, res) => {

        const url_web = req.body.url_web;
        const title = req.body.title;
        const email = req.body.email;
        const employees = req.body.employees;
        const logo = req.body.logo;
        const description = req.body.description;
        const type_enterprise = req.body.type_enterprise;
        client.connect();
        await client.query('insert into enterprise (url_web, title, email, employees, logo, description, type_enterprise) values ($1, $2, $3, $4, $5, $6, $7) returning *', [url_web, title, email, employees, logo, description, type_enterprise]).then(response=>{
        console.log(response.rows);
        client.end()
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end()
            res.send({status:500,message:err})
        })
        
       

}

const update_enterprise = async (req, res) => {
      
        const url_web = req.body.url_web;
        const title = req.body.title;
        const email = req.body.email;
        const employees = req.body.employees;
        const logo = req.body.logo;
        const description = req.body.description;
        const type_enterprise = req.body.type_enterprise;
        const id_enterprise = req.body.id_enterprise;
        client.connect();
        await client.query('update enterprise set url_web=$1, title=$2, email=$3, employees=$4, logo=$5, description=$6, type_enterprise=$7 where id_enterprise=$8', [url_web, title, email, employees, logo, description, type_enterprise, id_enterprise]).then(response=>{
        client.end()
        console.log(response)

        })
        
        
        .catch(err=>{
            client.end()
            console.log(err)
            res.send({status:500,message:err})
        })
}



const delete_enterprise = async (req, res) => {
        
        const id_enterprise = req.body.id_enterprise;
        client.connect();
        await client.query('Delete from enterprise where id_enterprise= $1', [id_enterprise]).then(response=>{
        console.log(response.rows);
        console.log('todo bien')
        client.end()
        })
        
        
        .catch(err=>{
            client.end()
            console.log(err)
            res.send({status:500,message:err})
        })
    }
    

module.exports = {
    insert_enterprise,
    update_enterprise,
    delete_enterprise
}