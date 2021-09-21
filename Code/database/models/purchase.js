/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = (sequelize, dataTypes) => {
  const alias = 'Purchase'
  const cols = {
    id: {
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
    id_user: {
      type: dataTypes.BIGINT(10),
      allowNull: false
    },
    id_product: {
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
    Purchase.belongsto(models.User, {
      as: 'user',
      foreignKey: 'id_user'
    })
  }

  return Purchase
}