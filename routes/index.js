const express=require('express');
const router=express.Router();

router.get('/api',(req,res)=>{
    res.status(200).send({
        success:'true',
        message:'This side Prashant We are talking to each other and that is going in the nation behind the cup',
    })
})
module.exports=router;