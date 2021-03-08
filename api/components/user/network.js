const express = require('express');
const router = express.Router();
const response = require('../../../network/response');
const controller = require('./controller');
router.get('/',function(req,res){
    const lista= controller.list();
    response.success(req,res,200,lista);
})

module.exports=router;