const {FumoClient} = require('../src/index');

const client = new FumoClient();
const fumo1 = {
  '_id': '6128c51b8caf0cf9a83f7236',
  'URL': 'https://cdn.nosesisaid.me/fumo/6128c51b8caf0cf9a83f7236.gif',
  'caption': null,
  'fumos': [],
};
const fumo2 = {
  '_id': '6128c5298caf0cf9a83f7298',
  'URL': 'https://cdn.nosesisaid.me/fumo/6128c5298caf0cf9a83f7298.jpg',
  'caption': null,
  'fumos': [],
};


describe('It should return the exact object of the fumo of id: ', () => {
  test(fumo1._id, () => {
    expect(client.specific(fumo1._id)).resolves.toMatchObject(fumo1);
  });
  test(fumo2._id, () => {
    expect(client.specific(fumo2._id)).resolves.toMatchObject(fumo2);
  });
});

