# fumo-api
The first api to obtain images of fumos

## Install 
instal is simple just use `npm i fumo-api`
## How to use 
 for the moment it only has three functions

 - randomFumo(allData)
 - allFumos()
 - getFumoByID(id, allData)

 use `randomFumo()` to get a random fumo from the library, if you want the full fumo object use `randomFumo(true)`

 use `allFumos()` to get the list of all fumos 
 
 use `getFumoByID(id)` to get a fumo by it's id


 
 ## Example 
 here is an example for use fumo-api
 ```js
 const {randomFumo} = require('fumo-api') 

randomFumo().then( (url) => {
    console.log(url)
})
 ```
