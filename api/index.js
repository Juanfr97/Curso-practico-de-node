const express = require('express');
const { api } = require('../config.js');
const config = require('../config.js');
const app= express();
const user = require('./components/user/network');

app.listen(config.api.port,()=>{
    console.log('Api escuchando en el puerto '+config.api.port);
});

app.use('/api/user',user);
