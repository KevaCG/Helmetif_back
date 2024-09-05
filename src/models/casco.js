const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const Categoria = require('./categoria');
const Marca = require('./marca');
const Tallas = require('./tallas');
const Norma = require('./norma');
const Material = require('./material');

const Casco = sequelize.define('Casco', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    referencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    // Relaciones
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        }
    },
    marcaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Marca,
            key: 'id'
        }
    },
    tallaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tallas,
            key: 'id'
        }
    },
    normaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Norma,
            key: 'id'
        }
    },
    materialId: {
        type: DataTypes.INTEGER,
        references: {
            model: Material,
            key: 'id'
        }
    }
}, {
    tableName: 'cascos',
    timestamps: false
});

Casco.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Casco.belongsTo(Marca, { foreignKey: 'marcaId' });
Casco.belongsTo(Tallas, { foreignKey: 'tallaId' });
Casco.belongsTo(Norma, { foreignKey: 'normaId' });
Casco.belongsTo(Material, { foreignKey: 'materialId' });

module.exports = Casco;
