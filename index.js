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






async function fumo() {
    let array = await schema.find()

    var url = await array[Math.floor(Math.random() * array.length)]
    return url.URL
}

module.exports = fumo