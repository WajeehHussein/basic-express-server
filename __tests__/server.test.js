'use strict';
const server = require('../src/server')
const supertest = require('supertest');

const request = supertest(server.app);


describe('API Server', () => {
    test('404 Not Found Error bad route', async () => {
        const response = await request.get('/not');
        expect(response.status).toEqual(404);
    });
    test('404 Not Found Error bad method', async () => {
        const response = await request.post('/person');
        expect(response.status).toEqual(404);
    });
    // it('handle server internal errors', async () => {
    //     const response = await request.get('/person');
    //     expect(response.status).toEqual(500);
    // })

})
