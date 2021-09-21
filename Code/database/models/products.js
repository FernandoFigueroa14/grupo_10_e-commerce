module.exports=(sequelize, dataTypes) => {
  let alias ='Products'
  let cols = {
    products_id: {
      type: dataTypes.INTEGER,
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

    }
  }
  let config ={
    tableName: 'products',
    timestamps: false
  }
  return sequelize.define(alias, cols, config)
}