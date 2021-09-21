module.exports=(sequelize, dataTypes) => {
  const alias = 'Users'
  const cols = {
    user_id: {
      type: dataTypes.INTEGER,
      primaryKey: true
    },
    emailUser: {
      type: dataTypes.STRING
    },
    passwordUser: {
      type: dataTypes.STRING

    },
    nameUser: {
      type: dataTypes.STRING
    },
    lastNameUser: {
      type: dataTypes.STRING
    },
    birthDate: {
      type: dataTypes.date
    },
    gender: {
      type: dataTypes.STRING

    },
    profilePic: {

    }
  }
  const config ={
    tableName: 'users',
    timestamps: false
  }
  return sequelize.define(alias, cols, config)
}