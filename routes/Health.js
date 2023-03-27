const express = require('express');
const cors    = require('cors');
const env     = require('../config');

const router  = express.Router();

router.get('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health retrieved' });
});

router.post('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health created' });
});

router.put('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health updated' });
});

router.delete('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health deleted' });
});


module.exports = router;