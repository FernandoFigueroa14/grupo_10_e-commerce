module.exports=(sequelize, dataTypes) => {
  let alias ='Products'
  let cols = {
    product_id: {
      type: dataTypes.BIGINT(10),
      primaryKey: true
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
      as: 'purchase',
      through: 'purchase_table',
      foreignKey: 'product_id',
      otherKey: 'purchase_id',
      timestamps: false
    })
  }
  return Product
}