module.exports=(sequelize, dataTypes) => {
  const alias = 'Users'
  const cols = {
    user_id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
    birth_date: {
      type: dataTypes.STRING
    },
    gender: {
      type: dataTypes.STRING

    },
    profilePic: {
      type: dataTypes.STRING
    }
  }
  const config ={
    tableName: 'users',
    timestamps: false
  }
  const User = sequelize.define(alias, cols, config)

  User.associate = function(models) {
    User.belongsToMany(models.Products, {
      as: 'product',
      through: 'purchase',
      foreignKey: 'user_id_FK',
      otherKey: 'product_id_FK',
      timestamps: false
    })
  }
  return User
}