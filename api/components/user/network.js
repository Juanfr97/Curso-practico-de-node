const express = require('express');
const router = express.Router();
const response = require('../../../network/response');
const controller = require('./index');
router.get('/',function(req,res){
    controller.list()
    .then((lista)=>{
        response.success(req,res,200,lista);
    })
    .catch((err)=>{
        response.error(req,res,500,err);
    });
});

router.get('/:id',function(req, res){
    controller.get(req.params.id)
    .then((user)=>{
        response.success(req,res,200,user);
    })
    .catch((err)=>{
        response.error(req,res,500,err);
    });
});

module.exports=router;