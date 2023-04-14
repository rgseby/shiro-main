const express    = require('express');
const cors       = require('cors');

const router  = express.Router();


router.get('/', cors(), async (req, res) => {
    res.status(200)
       .send(

        );
});


module.exports = router;