const { Client } = require('pg');

    const insert_comment = async(req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )

        const coment = req.body.coment;
        const date = req.body.date;
        const id_user = req.body.id_user;
        const id_post = req.body.id_post;
        client.connect();
        await client.query('insert into comment (coment, date, id_user, id_post) values ($1, $2, $3, $4) returning *', [coment, date, id_user, id_post]).then(response=>{
        console.log(response.rows);
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
        
       

}

    const update_comment = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
    
        const coment = req.body.coment;
        const date = req.body.date;
        const id_comment = req.body.id_comment;
        
        client.connect();
        
        await client.query('update comment set coment=$1, date=$2 where id_comment=$3', [coment, date, id_comment]).then(response=>{
        console.log(response)
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end();
            res.send({status:500,message:err})
        })
}



    const delete_comment = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
        
        const id_comment = req.body.id_comment;
        client.connect();
        await client.query('Delete from comment where id_comment = $1', [id_comment]).then(response=>{
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
    insert_comment,
    update_comment,
    delete_comment
}