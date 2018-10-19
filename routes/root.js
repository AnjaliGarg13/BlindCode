const route= require('express').Router()
const Participants=require('../db').participant

route.get('/login',(req, res)=>{
    res.render('login')
})
route.get('/',(req,res)=>{
    res.render('signup')
})
route.post('/login',(req,res)=>{
    Participants.findOne({
        where:{
            username:req.body.username
        }
    }).then((user)=>{
        if(!user){
            return res.send("no such user")
        }
        if(user.password != req.body.password){
            return res.send("wrong password")
        }
        res.redirect('/index')
    })
})
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