const route= require('express').Router()
const passport=require('../passport')
const Participants=require('../db').participant

route.get('/login',(req, res)=>{
    res.render('login')
})
route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/login',passport.authenticate('local',{
    failureRedirect:'/login',
    successRedirect:'/index'
}))
route.post('/signup',(req,res)=>{
    Participants.create({
        name:req.body.name,
        college: req.body.college,
        username: req.body.username,
        password: req.body.password
    }).then((createdParticipant)=>{
        res.redirect('/login')
    })
})

exports=module.exports={
    route
}