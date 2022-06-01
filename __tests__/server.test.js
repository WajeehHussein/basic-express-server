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
    test('the name is in the query string', async () => {
        const response = await request.get('/person?name=wajeeh');
        expect(response.status).toEqual(200)
    })
    test('given an name in the query string, the output object is correct', async () => {
        const response = await request.get('/person?name=wajeeh');
        expect(response.text).toEqual("{\"name\":\"wajeeh\"}")
    })
})
