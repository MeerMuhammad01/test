const request = require('supertest')
const server = require('../server')

describe('GET /sayhello', () => {
    test('should return hello message', async () => {
        const response = await request(server)
            .get('/sayhello')

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            Message: 'say Hello'
        })
    })
})
