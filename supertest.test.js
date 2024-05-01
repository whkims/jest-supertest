const request = require('supertest');
const app = require('./app');

// beforeAll(async () => {
//   await sequelize.sync();
// });


describe('GET /todo', () => {
  test('responds with json', async () => {
    await request(app).get('/todo')

        //.set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .expect('{"result":"do the homework"}')
        
        //.expect({ name: 'modolee' });;
  });
});
  /*
    describe('POST /user', () => {
      test('responds with name in json', async () => {
        await request(app)
          .post('/user')
          .set('Accept', 'application/json')
          .type('application/json')
          .send({ name: 'modolee' })
          .expect(201)
          .expect('Content-Type', /json/)
          .expect({ name: 'modolee' });
      });
    });
    */
  