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
const apartRoute       = require('./routes/apartment.route');
const healthRoute      = require('./routes/health.route');
const maintenanceRoute = require('./routes/maintenance.route');

/*      Endpoints       */
app.use('/apartment',   apartRoute);
app.use('/health',      healthRoute);
app.use('/maintenance', maintenanceRoute);

app.use(express.static('public'));
app.use('/images', express.static('images'));


db.sequelize.sync({
    force : true
})
.then(() => {
    console.log('Synced database.');
})
.catch((err) => {
    console.log('Failed to sync database : ' + err.message);
});

app.listen(process.env.PORT);
