const { createConnection } = require("mongoose")
const databaseurl = 'mongodb+srv://usuario:nosejajasosusuario@fumos.mbcko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const db = createConnection(databaseurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
db.on('error', error => console.error(error))
//db.once('open', MONGO_URI => console.log('Connected to Database'))
/*
                                   ADVICE!!
    the package works with mongoose & whith the user "usuario" & the password "nosejajasosusuario"
    it only has reading permission you can't delete or add anything.



                                     ¡¡AVISO!!
    el paqute funciona con mongoose y con el usuario "usuario" y la contraseña "nosejajasosusuario"
    solo tiene permisos de lectura a si que no podeis ni borrar ni añadir cosas.

*/

module.exports = db