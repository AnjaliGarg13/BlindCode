const express =require('express')
const path=require('path')
const session =require('express-session')
const passport=require('./passport')

const app=express();

const SERVER_PORT=process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","hbs")

app.use(session({
    secret:'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/user',require('./routes/root').route)
app.use('/',express.static(__dirname))

app.listen(SERVER_PORT,()=>console.log('server started at http://localhost:3333'))