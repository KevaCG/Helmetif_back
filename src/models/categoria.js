const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); // Asegúrate de tener la conexión correcta

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'categorias',
    timestamps: false
});

module.exports = Categoria;