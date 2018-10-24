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
// app.use('/question/ques1',express.static(path.join(__dirname,'q1')))
app.use('/question',require('./routes/question').route)
// app.use('/question',express.static(path.join(__dirname,'q2')))
// app.use('/question/ques3',express.static(path.join(__dirname,'q3')))
// app.use('/question/ques4',express.static(path.join(__dirname,'q4')))
// app.use('/question/ques5',express.static(path.join(__dirname,'q5')))
// app.use('/question/ques6',express.static(path.join(__dirname,'q6')))
app.use('/',express.static(__dirname))
app.use('/codeMirror',express.static(path.join(__dirname,'codeMirror')))




app.listen(SERVER_PORT,()=>console.log('server started at http://localhost:3333'))