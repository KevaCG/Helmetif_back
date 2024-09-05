const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); // Asegúrate de tener la conexión correcta

const Material = sequelize.define('Material', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'materiales',
    timestamps: false
});

module.exports = Material;