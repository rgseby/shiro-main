const assert  = require('assert');
const fetch   = require('node-fetch');
const env     = require('../config');
const crypto  = require('crypto');
const expect  = require('chai').expect;

describe('Test Health route for CRUD functionality :', () => {

    it('GET /health : ', async () => {
        let options = {
            url:    env.PROTOCOL + '://' + env.HOSTNAME + ':' + env.PORT,
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
        .to.contain('Health retrieved');
    });


    it('POST /health : ', async () => {
        let options = {
            url:    env.PROTOCOL + '://' + env.HOSTNAME + ':' + env.PORT,
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
        .to.contain('Health created');
    });


    it('PUT /health : ', async () => {
        let options = {
            url:    env.PROTOCOL + '://' + env.HOSTNAME + ':' + env.PORT,
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
        .to.contain('Health updated');
    });


    it('DELETE /health : ', async () => {
        let options = {
            url:    env.PROTOCOL + '://' + env.HOSTNAME + ':' + env.PORT,
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
        .to.contain('Health deleted');
    });

});