const { Client } = require('pg');

    const insert_post = async(req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )

        const content = req.body.content;
        const title = req.body.title;
        const date = req.body.date;
        const image = req.body.image;
        const id_user = req.body.id_user;
        client.connect();
        
        await client.query('insert into post (content, title, date, image, id_user) values ($1, $2, $3, $4, $5) returning *', [content, title, date, image, id_user]).then(response=>{
    
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

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
    
        const content = req.body.content;
        const title = req.body.title;
        const date = req.body.date;
        const image = req.body.image;
        const id_post = req.body.id_post;
        client.connect();
        
        await client.query('update post set content=$1, title=$2, date=$3, image=$4 where id_post=$5', [content, title, date, image, id_post]).then(response=>{
        console.log(response)
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            client.end();
            res.send({status:500,message:err})
        })
}



    const delete_post = async (req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )
        
        const id_post = req.body.id_post;
        client.connect();
        await client.query('Delete from post where id_post = $1', [id_post]).then(response=>{
        console.log(response)
        client.end();
        })
        
        
        .catch(err=>{
            console.log(err)
            res.send({status:500,message:err})
            client.end();
        })
    }

    const insert_image = async(req, res) => {

        const client = new Client(
    
            {connectionString:
              "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
              ssl:{
                  rejectUnauthorized:false
              }
        
           }
            )

        const content = 'papa';
        const title = 'papita';
        const date = '03-10-2021';
        const image = req.body.photo_profile;
        const id_user = 1;
        client.connect();
        
        await client.query('insert into post (content, title, date, image, id_user) values ($1, $2, $3, $4, $5) returning *', [content, title, date, image, id_user]).then(response=>{
    
        console.log(response.rows);
        client.end();
        })
}
    

module.exports = {
    insert_post,
    update_post,
    delete_post,
    insert_image
}