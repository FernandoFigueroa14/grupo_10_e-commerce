/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = (sequelize, dataTypes) => {
  const alias = 'Purchase'
  const cols = {
    purchase_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    total: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    product: {
      type: dataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: dataTypes.BIGINT(10),
      allowNull: false
    },
    product_id: {
      type: dataTypes.BIGINT(10),
      allowNull: false
    }
  }
  const config = {
    tableName: 'purchase',
    timestamps: false
  }

  const Purchase = sequelize.define(alias, cols, config)

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Purchase.belongsToMany(models.Products, {
      as: 'purchase',
      through: 'purchase_table',
      foreignKey: 'purchase_id',
      otherKey: 'product_id',
      timestamps: false
    })
  }
  return Purchase
}