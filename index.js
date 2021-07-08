const mongoose = require('mongoose');
const schema = require("./model")

async function fumo() {
    let array = await schema.find()

    var url = await array[Math.floor(Math.random() * array.length)]
    return url.URL
}

module.exports = fumo
