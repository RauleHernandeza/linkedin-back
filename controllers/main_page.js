const { Client } = require('pg');
var a, b, c, d, user

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
            //const id_user = 1
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
                    user= {id_user:a[0].id_user, name:a[0].name, lastname:a[0].lastname, phone:a[0].phone, email:a[0].email, photo_profile:a[0].photo_profile, birth_date:a[0].birth_date, id_country:a[0].id_country, aptitudes:d, education:c, experience:b}
                    //user= {user, aptitudes:d, education:c, experience:b}
                    console.log(user)
                    res.send({user});
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