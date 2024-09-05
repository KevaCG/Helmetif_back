const { DataTypes } = require('sequelize');
const sequelize = require('./connection');  // Importa la conexión desde 'connection'

const Casco = sequelize.define('Cascos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    referencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tallas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    norma: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING, 
        allowNull: true,
    }
}, {
    tableName: 'cascos',
    timestamps: false,
});

module.exports = Casco;
