const express    = require('express');
const cors       = require('cors');

const router     = express.Router();

const apartments = require('../controllers/apartment.controller');


router.post('/apartment', cors(), apartments.create);


module.exports = router;