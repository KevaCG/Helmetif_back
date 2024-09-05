// src/services/marcaService.js
const Marca = require('../models/marca');

const createMarca = async (marcaData) => {
    try {
        const marca = await Marca.create(marcaData);
        return marca;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllMarcas = async () => {
    try {
        const marcas = await Marca.findAll();
        return marcas;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getMarcaById = async (id) => {
    try {
        const marca = await Marca.findByPk(id);
        if (!marca) {
            throw new Error('No se encontró la marca');
        }
        return marca;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateMarca = async (id, updateData) => {
    try {
        const [updated] = await Marca.update(updateData, { where: { id }, returning: true });
        if (updated === 0) {
            throw new Error('No se encontró la marca para actualizar');
        }
        return await Marca.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteMarca = async (id) => {
    try {
        const deleted = await Marca.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('No se encontró la marca para eliminar');
        }
        return { id };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createMarca,
    getAllMarcas,
    getMarcaById,
    updateMarca,
    deleteMarca
};
