const express            = require('express');
const cors               = require('cors');

const router           = express.Router()


router.post('/apartment', cors(), async (req, res) => {
    res.status(201)
       .send('Apartment inserted');
});


module.exports = router;