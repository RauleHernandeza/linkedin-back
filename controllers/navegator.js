const { Client } = require('pg');
const bcrypt =require('bcryptjs')
var a, b

const navegator = async (req, res) => {

    const client = new Client(
    
        {connectionString:
          "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
          ssl:{
              rejectUnauthorized:false
          }
    
       }
        )
            const phone = req.body.phone;
            const titles = req.body.title;
            const title = '%' + titles + '%'
            client.connect();
            await client.query('select * from user_1 where phone =$1', [phone]).then(response=>{
                    a= response.rows;
                    console.log(a);
                    console.log('todo bien')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })

            await client.query('select * from enterprise where like $1', [title]).then(response=>{
                    b= response.rows;
                    console.log(b);
                    console.log('todo bien 2')
                    res.send({a, b});
                    client.end();
                    })
                    .catch(err=>{
                        console.log(err)
                        res.send({status:500,message:err})
                        client.end();
                    })
            
}

            const select_enterprise = async (req, res) => {

                const client = new Client(
    
                    {connectionString:
                      "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
                      ssl:{
                          rejectUnauthorized:false
                      }
                
                   }
                    )

                let p= 'm'    
                let dd= '%' + p + '%'
                console.log(dd)
                client.connect();
                await client.query('select * from enterprise where title like $1', [dd]).then(response=>{
                let y= response.rows
                console.log(y);
                res.send({y});
                console.log('todo bien')
                client.end();
                console.log('todo bien 2')
                })
                
                
                .catch(err=>{
                    console.log(err)
                    res.send({status:500,message:err})
                    console.log('algo mal')
                    client.end();
                })
            }


module.exports = {
    navegator,
    select_enterprise
}



 /*           await client.query('select * from experience where id_user =1').then(response=>{
            b= response.rows;
            console.log(b);
            res.send({b});
            console.log('todo bien 2')
            })
            .catch(err=>{
                console.log(err)
                res.send({status:500,message:err})
                client.end();
            })

            await client.query('select * from education where id_user =1').then(response=>{
            b= response.rows;
            console.log(c);
            res.send({c});
            console.log('todo bien 3')
            })
            .catch(err=>{
                console.log(err)
                res.send({status:500,message:err})
                client.end();
            })*/

/* 
select * from user_1 inner join attribute on attribute.id_user = user_1.id_user inner join education on education.id_user = user_1.id_user inner join experience on experience.id_user = user_1.id_user


*/