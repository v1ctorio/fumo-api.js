const fumoApi = require("../src/index")
async function logFumo() {
    const fumo = await fumoApi.randomFumo()
    console.log(fumo)
}
logFumo()