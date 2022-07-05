const FumoClient = require('../src/index');

const client = new FumoClient();

test('It should return a array with fumos: ', () => {
  expect(client.all()).resolves.toMatchObject([
    {
      '_id': expect.any(String),
      'URL': expect.any(String),
    },
  ]);
});
