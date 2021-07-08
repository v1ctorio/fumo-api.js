const { Schema } = require('mongoose')
const db = require("./connection")
const schema = new Schema({
    URL: { type: String }
})

module.exports = db.model('fumo', schema)