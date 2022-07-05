const axios = require('axios');
/**
 * @class FumoClient
 */
class FumoClient {
  /**
   * @param {{endpoint: String}} options
   */
  constructor(options = { endpoint: 'https://fumo-api.nosesisaid.me/' }) {
    this.endpoint = options.endpoint;
  }
  /**
   * @return {Promise<Object>}
   */
  async random() {
    const req = await axios({
      method: 'get',
      url: this.endpoint + 'random',
    });
    return req.data;
  };
  /**
   * @param {string} id
   * @return {Promise<Object>}
   */
  async specific(id) {
    const req = await axios({
      method: 'get',
      url: this.endpoint + 'fumo/' + id,
    });
    return req.data;
  }
  /**
   * @return {Promise<Array>}
   */
  async all() {
    const req = await axios({
      method: 'get',
      url: this.endpoint,
    });
    return req.data;
  }
}

module.exports = FumoClient;
