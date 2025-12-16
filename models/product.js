const { Model, DataTypes } = require('sequelize') ;

class Product extends Model {
  static init(sequelize) {
    super.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
       },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING
        }
    }, 
    { 
        sequelize,
        modelName: 'Product',
        tableName: 'produtos',
        timestamps: true,    
    });
    return this;
  }
}

module.exports = Product;   
