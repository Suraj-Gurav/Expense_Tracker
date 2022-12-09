const express=require('express');
const Router=express.Router();

Router.post('/add',require("./../Controller/record").addRecord);
Router.get('/',require("./../Controller/record").getRecord);
Router.delete('/:userId',require("./../Controller/record").deleteRecord);
Router.put('/:userId',require("./../Controller/record").updateExpens);

module.exports = Router;