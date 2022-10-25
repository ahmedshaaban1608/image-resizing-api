import supertest from 'supertest';
import app from '../server';

const req = supertest(app);
describe('Test server status', () => {
  it('1- Server is running ', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(200);
  });
  it('2- Invalid Query params', async () => {
    const res = await req.get(
      '/api/images?filename=river&width=a200&height=200px'
    );
    expect(res.status).toBe(420);
  });
  it("3- image isn't exist", async () => {
    const res = await req.get(
      '/api/images?filename=rivera&width=200&height=200'
    );
    expect(res.status).toBe(422);
  });
  it('4- image processing is successfully completed with no error', async () => {
    const res = await req.get('/api/images?filename=sea&width=50&height=50');
    expect(res.status).toBe(200);
  });
});
