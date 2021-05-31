const mongodb = require('mongodb')
const mongoose = require('mongoose');
const schema  = require('./model');

mongoose.connect('mongodb+srv://usuario:nosejajasosusuario@fumos.mbcko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err, db) => {
    if (err) console.error(err); else {

        var conectadoadb = true
    }
})
/* 
                                   ADVICE!!
    the package works with mongoose & whith the user "usuario" & the password "nosejajasosusuario"
    it only has reading permission you can't delete or add anything.



                                     ¡¡AVISO!!
    el paqute funciona con mongoose y con el usuario "usuario" y la contraseña "nosejajasosusuario"
    solo tiene permisos de lectura a si que no podeis ni borrar ni añadir cosas.

*/





async function fumo() {
    let array = await schema.find()

    var url = await array[Math.floor(Math.random() * array.length)]
    return url.URL
}

module.exports = fumo