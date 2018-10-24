const route= require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users
// import { codeCompile } from '../codeCompileRun'
const hack=require('../hackerearth-api').hack

route.get('/ques1',(req,res)=>{
    res.render('q1' )
})

route.post('/ques1',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = `#include <iostream>
using namespace std;

int main() 
{
    cout << "Hello, World!";
    return 0;
}`;
    config.input = "";
    config.language = "Cpp";

    hack.run(config)
        .then(result => {
            console.log(result)
            res.send("RUN STATUS"+result)
        }).catch(err => {
        console.log(err)
    })

})

exports=module.exports={
    route
}