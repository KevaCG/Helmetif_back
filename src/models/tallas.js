const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); // Asegúrate de tener la conexión correcta

const Tallas = sequelize.define('Tallas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    talla: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tallas',
    timestamps: false
});

module.exports = Tallas;