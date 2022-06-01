'use strict';
const server = require('../src/server')
const supertest = require('supertest');

const request = supertest(server.app);


describe('API Server', () => {
    it('handle server internal errors', async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    })

})