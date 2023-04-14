const express    = require('express');
const cors       = require('cors');

const router     = express.Router();

const apartments = require('../controllers/apartment.controller');


router.get('/'    , cors(), apartments.findAll);
router.get('/poza', cors(), apartments.findOne);


module.exports = router;