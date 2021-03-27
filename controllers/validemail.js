const nodemailer=require('nodemailer')
const { randomNumber} =require('../helpers/libs.js')

const verificar_ruta = async (req, res) => {
    
    res.status(500).send("todo ok")
    console.log(req.body);
}

const validemail = async (req, res) => {
    var ramdom=randomNumber();
    console.log(req.body);
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure:false,
        auth:{
            user: "smtp.de.pratica@gmail.com",
            pass: "spamydemas77"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    var mailoptions={
        from: "lindekin__",
        to: req.body.email,
        subject: "Registro",
        text: "ingrese el siguiente valor si desea confirmar su cuenta de linkedin: " + ramdom
    }
    console.log(mailoptions)

    transport.sendMail(mailoptions, (error, info)=>{
        if(error){
            console.log(error)
            res.status(500).send("algun fallo")
        }

        else {
            console.log("email enviado")
            res.status(200).jsonp(req.body)
        }
    })


}

module.exports = {
    validemail,
    verificar_ruta
}