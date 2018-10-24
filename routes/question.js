const route= require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users

route.get('/ques1',(req,res)=>{
    if(req.user){
        res.render('q1')
    }else{
        res.redirect('/user/signup')
    }
})
route.get('/ques2',(req,res)=>{
    if(req.user){
        res.render('q2')
    }else{
        res.redirect('/user/signup')
    }
})
route.get('/ques3',(req,res)=>{
    if(req.user){
        res.render('q3')
    }else{
        res.redirect('/user/signup')
    }
})
route.get('/ques4',(req,res)=>{
    if(req.user){
        res.render('q4')
    }else{
        res.redirect('/user/signup')
    }
})
route.get('/ques5',(req,res)=>{
    if(req.user){
        res.render('q5')
    }else{
        res.redirect('/user/signup')
    }
})



exports=module.exports={
    route
}