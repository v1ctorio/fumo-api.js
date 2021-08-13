const fetch = require("node-fetch")

fumo = async () => {
    const res = await fetch("http://fumoapi.herokuapp.com/fumo");
    const data = await res.text()
    return data
}


module.exports = fumo