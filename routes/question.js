const route= require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users
const hack=require('../hackerearth-api').hack
const Sequelize=require('sequelize')

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

route.post('/ques1',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q1code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques1:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})

route.post('/ques2',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q2code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques2:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})

route.post('/ques3',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q3code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques3:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})
route.post('/ques4',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q4code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques4:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})
route.post('/ques5',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q5code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques5:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})



exports=module.exports={
    route
}