# fumo-api
The first api to obtain images of fumos
## Website
https://www.npmjs.com/package/fumo-api
## Install 
instal is simple just use `npm i fumo-api`
## How to use 
 for the moment it only has one function

 - fumo()

 use `fumo()` to get a random fumo from the library 


 
 ## Example 
 here is an example for use fumo-api
 ```js
 const fumo = require('fumo-api') 

fumo().then( (url) => {
    console.log(url)
})
 ```
