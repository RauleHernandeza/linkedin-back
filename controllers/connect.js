const { Client } = require('pg');

    const insert_connect = async(req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )

        const user1 = req.body.user1;
        const user2 = req.body.user2;
        client.connect();
        await client.query('insert into connets (user1, user2) values ($1, $2) returning *', [user1, user2]).then(response=>{
        console.log(response.rows);
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
}



    const delete_connect = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
        
        const user1 = req.body.user1;
        const user2 = req.body.user2;
        client.connect();
        await client.query('Delete from connets where user1 = $1 and user2 = $2', [user1, user2]).then(response=>{
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
    insert_connect,
    delete_connect
}