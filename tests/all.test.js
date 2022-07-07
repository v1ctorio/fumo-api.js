const {FumoClient} = require('../src/index');

const client = new FumoClient();

test('It should return a array with fumos: ', () => {
  expect(client.all()).resolves.toBeInstanceOf(Array);
});
