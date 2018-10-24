const route= require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users

route.get('/',(req,res)=>{
    if(req.user){
        console.log(req.user.dataValues.username)
        res.render('homepage')
    }else{
        res.redirect('/user/signup')
    }
})


route.get('/login',(req, res)=>{
    res.render('login')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.post('/login',passport.authenticate('local',{
    failureRedirect:'/user/login',
    successRedirect:'/user'
}))
route.post('/signup',(req,res)=>{
    Users.create({
        name:req.body.name,
        college: req.body.college,
        username: req.body.username,
        password: req.body.password
    }).then((createdUser)=>{
        res.redirect('/user/login')
    })
})

exports=module.exports={
    route
}