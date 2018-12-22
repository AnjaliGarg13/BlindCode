const Sequelize=require('sequelize')

const db = new Sequelize(
    'sql12271101',
    'sql12271101',
    'UVtniK613I',{
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Users=db.define('final',{
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
    },
    ques1:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    ques2:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    ques3:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    ques4:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    ques5:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    time:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
    }
})

db.sync().then(()=>console.log("Database is ready"))

exports=module.exports={
    db,Users
}