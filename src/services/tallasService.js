// src/services/tallasService.js
const Tallas = require('../models/tallas');

const createTalla = async (tallaData) => {
    try {
        const talla = await Tallas.create(tallaData);
        return talla;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllTallas = async () => {
    try {
        const tallas = await Tallas.findAll();
        return tallas;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getTallaById = async (id) => {
    try {
        const talla = await Tallas.findByPk(id);
        if (!talla) {
            throw new Error('No se encontró la talla');
        }
        return talla;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateTalla = async (id, updateData) => {
    try {
        const [updated] = await Tallas.update(updateData, { where: { id }, returning: true });
        if (updated === 0) {
            throw new Error('No se encontró la talla para actualizar');
        }
        return await Tallas.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteTalla = async (id) => {
    try {
        const deleted = await Tallas.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('No se encontró la talla para eliminar');
        }
        return { id };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createTalla,
    getAllTallas,
    getTallaById,
    updateTalla,
    deleteTalla
};
