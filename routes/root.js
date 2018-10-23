const route= require('express').Router()
const passport=require('../passport')
const Participants=require('../db').participant

route.get('/login',(req, res)=>{
    res.render('login')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.post('/login',passport.authenticate('local',{
    failureRedirect:'/user/login',
    successRedirect:'/index'
}))
route.post('/signup',(req,res)=>{
    Participants.create({
        name:req.body.name,
        college: req.body.college,
        username: req.body.username,
        password: req.body.password
    }).then((createdParticipant)=>{
        res.redirect('/user/login')
    })
})

exports=module.exports={
    route
}