const recordModel=require('./../Model/record');

//record add function
exports.addRecord =async (req,res) =>{
    try{
        const data=await new recordModel(req.body).save();
        res.json(data);
    }catch(err){
        res.json(err);
    }
}

//record get function
exports.getRecord = async (req,res) => {
    try{
        const data=await recordModel.find();
        res.json(data);
    }catch(err){
        res.json(err);
    }
   
};

exports.updateExpens = async (req,res)=>{
    recordModel.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
        if(err){
            res.json(err);       
        }else{
            res.json(data);
        }
    });
};

// //delete User 
exports.deleteRecord = (req,res) =>{
    recordModel.findByIdAndDelete({_id:req.params.userId},(err,data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
};





