const { Client } = require('pg');

    const insert_reaction = async(req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )

        const description = req.body.description;
        client.connect();
        await client.query('insert into reaction (description) values ($1) returning *', [description]).then(response=>{
    
        console.log(response.rows);
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
        
       

}

    const update_reaction = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
    
        const description = req.body.description;
        const id_reaction = req.body.id_reaction;
        client.connect();
        
        await client.query('update reaction set description=$1 where id_reaction=$2', [description, id_reaction]).then(response=>{
        console.log(response)
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end();
            res.send({status:500,message:err})
        })
}



    const delete_reaction = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
        
        const id_reaction = req.body.id_reaction;
        client.connect();
        await client.query('Delete from reaction where id_reaction = $1', [id_reaction]).then(response=>{
        console.log(response)
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
    }
    

module.exports = {
    insert_reaction,
    update_reaction,
    delete_reaction
}