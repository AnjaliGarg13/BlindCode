const Sequelize=require('sequelize')

const db=new Sequelize('sql12262485','sql12262485','FBa3GxiDZ3',{
    host:'sql12.freemysqlhosting.net',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
    }
)

const Users=db.define('users',{
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
    db,Users
}