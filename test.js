var fumo = require('./index.js')

fumo().then((fumourl) => {
    console.log(fumourl)
    
    process.exit()
})
// test