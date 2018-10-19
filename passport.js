const passport=require('passport')
const Participant=require('./db').participant

passport.serializeUser(function (participant,done) {
    done(participant.username)
})



