module.exports=(sequelize, dataTypes)=>{
let alias ="Users"
let cols={
   user_id:{
   type: dataTypes.INTEGER
   },
   emailUser:{
    type: dataTypes.STRING
   },
   passwordUser:{
    type: dataTypes.STRING

   },
   nameUser:{
    type: dataTypes.STRING
   },
   lastNameUser:{
    type: dataTypes.STRING
   },
   birthDate:{
    type: dataTypes.date
   },
   gender:{
       type: dataTypes.STRING

   },
   profilePic:{
       
   }
}
let config ={
    tableName="user",
    timestamps=false
}
    const User= sequelize.define(alias,cols, config)
return User;
}