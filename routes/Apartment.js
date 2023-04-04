const express    = require('Express');
const cors       = require('cors');
const controller = require('../controllers/ctrl_Apartment');

const router  = express.Router();


router.get('/', cors(), (req, res) => {
    res.status(200)
       .send(
        controller.getAllApartments()
        );
});


router.post('/', cors(), (req, res) => {
    res.status(201)
       .send({

       });
});


router.put('/', cors(), (req, res) => {
    res.status(200)
       .send({

       });
});


router.delete('/', cors(), (req, res) => {
    res.status(204)
       .send({

       });
});