const express = require('express');
const cors    = require('cors');
const db      = require('./models');

const app     = express();

require('dotenv').config();

require('console-stamp')(console, { 
    format: ':date(yyyy/mm/dd HH:MM:ss.l)' 
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');    
    next();
});

/*      Routes       */
const apartRoute      = require('./routes/Apartment');
const healthRoute     = require('./routes/Health');

/*      Endpoints       */
app.use('/apartment',  apartRoute);
app.use('/health',     healthRoute);


db.sequelize.sync({
    force : true
})
.then((req) => {
    app.listen(process.env.PORT);
});
