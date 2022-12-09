const mongoose=require('mongoose');


const expensSchema = new mongoose.Schema({
    title:String,
    amount:Number,
    date:Date
});

const record= mongoose.model("record",expensSchema);
 module.exports = record;