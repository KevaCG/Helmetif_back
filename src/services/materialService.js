// src/services/materialService.js
const Material = require('../models/material');

const createMaterial = async (materialData) => {
    try {
        const material = await Material.create(materialData);
        return material;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllMaterials = async () => {
    try {
        const materials = await Material.findAll();
        return materials;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getMaterialById = async (id) => {
    try {
        const material = await Material.findByPk(id);
        if (!material) {
            throw new Error('No se encontró el material');
        }
        return material;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateMaterial = async (id, updateData) => {
    try {
        const [updated] = await Material.update(updateData, { where: { id }, returning: true });
        if (updated === 0) {
            throw new Error('No se encontró el material para actualizar');
        }
        return await Material.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteMaterial = async (id) => {
    try {
        const deleted = await Material.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('No se encontró el material para eliminar');
        }
        return { id };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createMaterial,
    getAllMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};
