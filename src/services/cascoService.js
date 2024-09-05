// src/services/cascoService.js
const Casco = require('../models/casco');
const Categoria = require('../models/categoria');
const Marca = require('../models/marca');
const Tallas = require('../models/tallas');
const Norma = require('../models/norma');
const Material = require('../models/material');

const createCasco = async (cascoData) => {
    try {
        const casco = await Casco.create(cascoData);
        return casco;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllCascos = async () => {
    try {
        const cascoss = await Casco.findAll({
            include: [Categoria, Marca, Tallas, Norma, Material]
        });
        return cascoss;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getCascoByIdOrReferencia = async (idOrReferencia) => {
    try {
        const casco = await Casco.findOne({
            where: {
                [Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            },
            include: [Categoria, Marca, Tallas, Norma, Material]
        });
        if (!casco) {
            throw new Error('No se encontró un casco con esa referencia o id');
        }
        return casco;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateCascoByIdOrReferencia = async (idOrReferencia, updateData) => {
    try {
        const [updated] = await Casco.update(updateData, {
            where: {
                [Op.or]: [
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
                [Op.or]: [
                    { id: idOrReferencia },
                    { referencia: idOrReferencia }
                ]
            },
            include: [Categoria, Marca, Tallas, Norma, Material]
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteCascoByIdOrReferencia = async (idOrReferencia) => {
    try {
        const deleted = await Casco.destroy({
            where: {
                [Op.or]: [
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
