const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); // Asegúrate de tener la conexión correcta

const Marca = sequelize.define('Marca', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_marca: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'marcas',
    timestamps: false
});

module.exports = Marca;