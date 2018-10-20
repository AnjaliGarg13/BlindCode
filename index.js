const route=require('express').Router()
const express =require('express')

route.get('/',(req,res)=>{
    if(req.user){
        res.render('index')
    }else{
        res.redirect('/login')
    }
})

exports=module.exports={
    route
}