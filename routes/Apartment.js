const express    = require('express');
const cors       = require('cors');
const controller = require('../controllers/ctrl_Apartment');

const router  = express.Router();


router.get('/', cors(), async (req, res) => {
    res.status(200)
       .send(
        await controller.getAllApartments()
        );
});


module.exports = router;