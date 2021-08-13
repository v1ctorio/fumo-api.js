const fumoApi = require("../src/index")
async function logFumo() {
    const fumo = await fumoApi()
    console.log(fumo)
}
logFumo()