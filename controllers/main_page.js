const { Client } = require('pg');
var a, b, c, d, e

const get_main_page = async (req, res) => {

    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
            const id_user = req.body.id_user;
            client.connect();
            await client.query('select * from user_1 where id_user =$1', [id_user]).then(response=>{
                    a= response.rows;
                    console.log('todo bien')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })
    
                await client.query('select * from experience where id_user =$1', [id_user]).then(response=>{
                    b= response.rows;
                    console.log('todo bien 2')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })
    
                await client.query('select * from education where id_user =$1', [id_user]).then(response=>{
                    c= response.rows;
                    console.log('todo bien 3')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })

                await client.query('select * from attribute where id_user =$1', [id_user]).then(response=>{
                    d= response.rows;
                    console.log(a, b, c, d);
                    res.send({a, b, c, d});
                    console.log('todo bien 4')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })

                /*await client.query('select * from enterprise where id_user =$1', [id_user]).then(response=>{
                    e= response.rows;
                    console.log(a, b, c, d, e);
                    res.send({a, b, c, d, e});
                    console.log('todo bien 5')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })*/
                    
}

module.exports = {
    get_main_page
}