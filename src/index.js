const fetch = require("node-fetch");
/**
 * @module fumo-api
 * @see module:fumo-api
 */

module.exports = {
    /**
     * Return a list whit all fumos
     * @async
     * @returns {Object} - List of fumos
     */
    allFumos: async function allFumos() {
        const res = await fetch("http://fumoapi.herokuapp.com/fumos");
        const data = await res.json();
        return data;
    },
    /**
     * Get a fumo by it's id
     * @async
     * @param {String} id - fumo's id
     * @param {Boolean=} allData - if ant the full oject or only url
     * @returns {(String|Object)} - Return the fumo url or object
     */
    getFumoByID: async function getByID(id, allData) {
        if (!id) throw new Error("You need to provide an id");
        const res = await fetch(`http://fumoapi.herokuapp.com/fumos/${id}`);
        const data = await res.json();
        const url = data.URL;
        if (allData) return data;
        return url;
    },
    /**
     * Returns a random fumo url or complete data
     * @async
     * @param {Boolean=} allData - if  true returns complete fumo object
     * @returns {(Object|String)} - the random fumo url or object
     */
    randomFumo: async function randomFumo(allData) {
        const res = await fetch("http://fumoapi.herokuapp.com/random");
        const data = await res.json();
        if (allData) return data;
        const url = data.URL;
        return url;
    }
}