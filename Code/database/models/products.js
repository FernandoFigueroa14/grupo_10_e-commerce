module.exports=(sequelize, dataTypes)=>{
    let alias ="Products";
    let cols = {
        products_id: {

        },
        name:{

        },
        price:{

        },
        description:{

        },
        category:{

        },
        img:{

        }

    }
    let config ={
    tableName="products",
    timestamps = false
    }
    const Product= sequelize.define(alias,cols, config)
    return Product;
    let alias ="Users"
    let cols={
       user_id:{

       },
       emailUser:{

       },
       passwordUser:{

       },
       nameUser:{

       },
       lastNameUser:{

       },
       birth-date:{

       },
       gender:{
    
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
}