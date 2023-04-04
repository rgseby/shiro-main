const express            = require('express');
const cors               = require('cors');
const { ctrl_Apartment } = require('../controllers');
//const controller_faq   = require('../controllers/ctrl_Apartment');

const router           = express.Router()


router.post('/apartment', cors(), async (req, res) => {

    await controller_apart.insertApartment(
        'Salut',
        'Salut',
        'Salut',
        360,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    );

    res.status(201)
       .send('Apartment inserted');
});


module.exports = router;