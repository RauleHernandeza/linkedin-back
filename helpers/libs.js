const helpers = {}

helpers.randomNumber = () => {
    const possible = 'abcdefghijklmnopqrstuwxyz0123456789'
    var randomnumber= 0;
    for (let i=0; i<11; i++){
        randomnumber += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomnumber;
}

module.exports= helpers;