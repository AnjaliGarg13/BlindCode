const Sequelize=require('sequelize')

const db=new Sequelize(
    'BlindCodeParticipants',
    'BlindCode',
    'BlindCode@1',{
        dialect:'mysql',
        host:'localhost'
    }
)

const participant=db.define('participant',{
    name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    college:{
        type:Sequelize.STRING,
    },
    username:{
      type: Sequelize.STRING,
      allowNull:false,
      unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

db.sync().then(()=>console.log("Database is ready"))

exports=module.exports={
    db,participant
}