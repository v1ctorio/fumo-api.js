const { connect } = require('mongoose')
var fumo = require('./index')

fumo().then((fumourl) => {
    console.log(fumourl)
    
    process.exit()
})
// test
