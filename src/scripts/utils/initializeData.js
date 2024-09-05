const sequelize = require('../models/connection');
const Categoria = require('../models/categoria');
const Marca = require('../models/marca');
const Tallas = require('../models/tallas');
const Norma = require('../models/norma');
const Material = require('../models/material');

const insertDefaultData = async () => {
    try {
        // Insertar categorías
        const categorias = ['Integral', 'Abatible', 'Abiertos', 'Multipropósito', 'Cross', 'Modulares'];
        for (const nombre of categorias) {
            await Categoria.findOrCreate({
                where: { nombre_categoria: nombre },
                defaults: { nombre_categoria: nombre }
            });
        }

        // Insertar tallas
        const tallas = ['XS', 'S', 'M', 'L', 'XL'];
        for (const talla of tallas) {
            await Tallas.findOrCreate({
                where: { talla: talla },
                defaults: { talla: talla }
            });
        }

        // Opcional: Insertar otras entidades similares si es necesario

        console.log('Datos por defecto insertados exitosamente.');
    } catch (error) {
        console.error('Error al insertar datos por defecto:', error);
    }
};

const run = async () => {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    await insertDefaultData();
    process.exit(0); // Salir del proceso una vez completada la inserción de datos
};

run();
