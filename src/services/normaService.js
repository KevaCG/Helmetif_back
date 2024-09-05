// src/services/normaService.js
const Norma = require('../models/norma');

const createNorma = async (normaData) => {
    try {
        const norma = await Norma.create(normaData);
        return norma;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllNormas = async () => {
    try {
        const normas = await Norma.findAll();
        return normas;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getNormaById = async (id) => {
    try {
        const norma = await Norma.findByPk(id);
        if (!norma) {
            throw new Error('No se encontró la norma');
        }
        return norma;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateNorma = async (id, updateData) => {
    try {
        const [updated] = await Norma.update(updateData, { where: { id }, returning: true });
        if (updated === 0) {
            throw new Error('No se encontró la norma para actualizar');
        }
        return await Norma.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteNorma = async (id) => {
    try {
        const deleted = await Norma.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('No se encontró la norma para eliminar');
        }
        return { id };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createNorma,
    getAllNormas,
    getNormaById,
    updateNorma,
    deleteNorma
};
