const express = require('express');
const cors    = require('cors');

const router  = express.Router();

router.get('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health check - OK' });
});

router.post('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health check - OK' });
});

router.put('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health check - OK' });
});

router.delete('/', cors(), (req, res) => {
    res.status(200).send({ data: 'Health check - OK' });
});


module.exports = router;