# fumo-api
Official API wrapper fo the [Fumo API](https://github.com/Nosesisaid/fumo-api).
![FumoApi-js banner](https://repository-images.githubusercontent.com/368607004/396b7aca-535a-46a4-a61e-707bba974cd3)

## Install 
Install is simple, `yarn add fumo-api`/`npm install fumo-api`

## How to use example
Get a random fumo
```js
const {FumoClient} = require('fumo-api')
const fumos = new FumoClient()

fumos.random().then(fumo => {
  console.log(fumo)
})
```
Use a custom baseURL
```js
const {FumoClient} = require('fumo-api')
const fumos = new FumoClient({endpoint: 'https://customdb.example.com/'})
```

Thanks for using fumo-api!