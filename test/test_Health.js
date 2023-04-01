const assert  = require('assert');
const fetch   = require('node-fetch');
const crypto  = require('crypto');
const expect  = require('chai').expect;


require('dotenv').config({ path : '../.env'});


describe('Test Health route for CRUD functionality :', () => {

    it('GET /health : ', async () => {
        let options = {
            url:    process.env.PROTOCOL + '://' + process.env.HOSTNAME + ':' + process.env.PORT,
            method: 'GET'
        };

        let testUrl = options.url + '/health';

        const response = await fetch(testUrl, {
            method: options.method
        });

        expect(await response.status).to.be.equal(200);

        expect(await response.json())
        .to.have.property('data')
        .and
        .to.contain('Health check - OK');
    });


    it('POST /health : ', async () => {
        let options = {
            url:    process.env.PROTOCOL + '://' + process.env.HOSTNAME + ':' + process.env.PORT,
            method: 'POST'
        };

        let testUrl = options.url + '/health';

        const response = await fetch(testUrl, {
            method: options.method
        });

        expect(await response.status).to.be.equal(200);

        expect(await response.json())
        .to.have.property('data')
        .and
        .to.contain('Health check - OK');
    });


    it('PUT /health : ', async () => {
        let options = {
            url:    process.env.PROTOCOL + '://' + process.env.HOSTNAME + ':' + process.env.PORT,
            method: 'PUT'
        };

        let testUrl = options.url + '/health';

        const response = await fetch(testUrl, {
            method: options.method
        });

        expect(await response.status).to.be.equal(200);

        expect(await response.json())
        .to.have.property('data')
        .and
        .to.contain('Health check - OK');
    });


    it('DELETE /health : ', async () => {
        let options = {
            url:    process.env.PROTOCOL + '://' + process.env.HOSTNAME + ':' + process.env.PORT,
            method: 'DELETE'
        };

        let testUrl = options.url + '/health';

        const response = await fetch(testUrl, {
            method: options.method
        });

        expect(await response.status).to.be.equal(200);

        expect(await response.json())
        .to.have.property('data')
        .and
        .to.contain('Health check - OK');
    });

});