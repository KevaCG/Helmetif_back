const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); // Asegúrate de tener la conexión correcta

const Norma = sequelize.define('Norma', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    norma: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'normas',
    timestamps: false
});

module.exports = Norma;