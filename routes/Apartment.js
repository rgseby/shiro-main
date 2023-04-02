const express = require('Express');
const cors    = require('cors');

const router  = express.Router();


router.get('/', cors(), (req, res) => {
    res.status(200)
       .send({

       });
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