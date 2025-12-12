const { Model, DataTypes } = require('sequelize') ;

class Product extends Model {
  static init(sequelize) {
    super.init({
        nome: {
        type: DataTypes.STRING,
        allowNull: false
       },
        quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
        },
        preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
        },
        categoria: {
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
