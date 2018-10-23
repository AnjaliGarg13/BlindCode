const route=require('express').Router()
const express =require('express')

route.get('/',(req,res)=>{
    if(req.user){
        res.render('ind')
    }else{
        console.log(req)
        res.redirect('/user/login')
    }
})

exports=module.exports={
    route
}