const express = require('express')
const app = express();
const path = require('path');
const cors=require('cors');

//middlewares
app.use(cors());
app.use(express.json());

//port
process.env.PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
console.log("hola");
res.send(200);
})

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en puerto 3000");
})

//Routes
app.use(require('./routes/routes'));

