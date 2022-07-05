const FumoClient = require('../src/index');

const client = new FumoClient();

describe('It should return a random fumo object: ', () => {
  test('test 1', () => {
    expect(client.random()).resolves.toMatchObject({
      '_id': expect.any(String),
      'URL': expect.any(String),
    });
  });
  test('test 2', () => {
    expect(client.random()).resolves.toMatchObject({
      '_id': expect.any(String),
      'URL': expect.any(String),
    });
  });
});
