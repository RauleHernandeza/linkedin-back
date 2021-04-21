const { Client } = require('pg')

const client = new Client(
    {connectionString:
    "postgres://rzgaumbv:BigyVukCq6eoDlNDtnsoMcikb2YWhN0d@queenie.db.elephantsql.com:5432/rzgaumbv",
    ssl:{
        rejectUnauthorized:false
            } 
        }
    )

    function enter(){
    client.connect();       
    }

    function exit(){
    client.end();
    }
    
    module.exports = {
        enter,
        exit
    }