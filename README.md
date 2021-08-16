# fumo-api
The first api to obtain images of fumos

## Install 
instal is simple just use `npm i fumo-api`
## How to use 
 <a name="module_fumo-api"></a>



* [fumo-api](#module_fumo-api)
    * [.allFumos()](#module_fumo-api.allFumos) ⇒ <code>Object</code>
    * [.getFumoByID(id, [allData])](#module_fumo-api.getFumoByID) ⇒ <code>String</code> \| <code>Object</code>
    * [.randomFumo([allData])](#module_fumo-api.randomFumo) ⇒ <code>Object</code> \| <code>String</code>

<a name="module_fumo-api.allFumos"></a>

### fumo-api.allFumos() ⇒ <code>Object</code>
Return a list whit all fumos

**Kind**: static method of [<code>fumo-api</code>](#module_fumo-api)
**Returns**: <code>Object</code> - - List of fumos
<a name="module_fumo-api.getFumoByID"></a>

### fumo-api.getFumoByID(id, [allData]) ⇒ <code>String</code> \| <code>Object</code>
Get a fumo by it's id

**Kind**: static method of [<code>fumo-api</code>](#module_fumo-api)
**Returns**: <code>String</code> \| <code>Object</code> - - Return the fumo url or object

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | fumo's id |
| [allData] | <code>Boolean</code> | if ant the full oject or only url |

<a name="module_fumo-api.randomFumo"></a>

### fumo-api.randomFumo([allData]) ⇒ <code>Object</code> \| <code>String</code>
Returns a random fumo url or complete data

**Kind**: static method of [<code>fumo-api</code>](#module_fumo-api)
**Returns**: <code>Object</code> \| <code>String</code> - - the random fumo url or object

| Param | Type | Description |
| --- | --- | --- |
| [allData] | <code>Boolean</code> | if  true returns complete fumo object |



 
 ## Example 
 here is an example for use fumo-api
 ```js
 const {randomFumo} = require('fumo-api') 

randomFumo().then( (url) => {
    console.log(url)
})
 ```
