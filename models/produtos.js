const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantidade: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        preco: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        categoria: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'produto',
        tableName: 'produtos',   
        timestamps: true,              
      }
    );

    return this;
  }
}

module.exports = Produto;
