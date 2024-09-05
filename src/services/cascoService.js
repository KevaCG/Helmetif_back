const { Sequelize, Op } = require('sequelize');
const Casco = require('../models/casco');

// Función para crear un nuevo casco
const createCasco = async (cascoData) => {
    try {
        const casco = await Casco.create(cascoData);
        return casco;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para obtener todos los cascos
const getAllCascos = async () => {
    try {
        const cascoss = await Casco.findAll();
        return cascoss;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para obtener un casco por id o referencia
const getCascoByIdOrReferencia = async (idOrReferencia) => {
    try {
        const casco = await Casco.findOne({
            where: {
                [Sequelize.Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            }
        });
        if (!casco) {
            throw new Error('No se encontró un casco con esa referencia o id');
        }
        return casco;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para actualizar un casco por id o referencia
const updateCascoByIdOrReferencia = async (idOrReferencia, updateData) => {
    try {
        const [updated] = await Casco.update(updateData, {
            where: {
                [Sequelize.Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            },
            returning: true
        });
        if (updated === 0) {
            throw new Error('No se encontró un casco con esa referencia o id');
        }
        return await Casco.findOne({
            where: {
                [Sequelize.Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            }
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para eliminar un casco por id o referencia
const deleteCascoByIdOrReferencia = async (idOrReferencia) => {
    try {
        const deleted = await Casco.destroy({
            where: {
                [Sequelize.Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            }
        });
        if (deleted === 0) {
            throw new Error('No se encontró un casco con esa referencia o id para eliminar');
        }
        return { idOrReferencia };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createCasco,
    getAllCascos,
    getCascoByIdOrReferencia,
    updateCascoByIdOrReferencia,
    deleteCascoByIdOrReferencia
};
