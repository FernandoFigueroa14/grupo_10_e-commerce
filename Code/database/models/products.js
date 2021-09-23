module.exports=(sequelize, dataTypes) => {
  let alias ='Products'
  let cols = {
    product_id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING
    },
    price: {
      type: dataTypes.DECIMAL
    },
    description: {
      type: dataTypes.STRING
    },
    category: {
      type: dataTypes.STRING
    },
    img: {
      type: dataTypes.STRING
    }
  }
  let config ={
    tableName: 'products',
    timestamps: false
  }
  const Product = sequelize.define(alias, cols, config)

  Product.associate = function(models) {
    Product.belongsToMany(models.Purchase, {
      as: "user",
      through: 'purchase',
      foreignKey: 'product_id_FK',
      otherKey: 'user_id_FK',
      timestamps: false
    })
  }
  return Product
}