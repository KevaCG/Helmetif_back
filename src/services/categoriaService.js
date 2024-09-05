// src/services/categoriaService.js
const Categoria = require('../models/categoria');

const createCategoria = async (categoriaData) => {
    try {
        const categoria = await Categoria.create(categoriaData);
        return categoria;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllCategorias = async () => {
    try {
        const categorias = await Categoria.findAll();
        return categorias;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getCategoriaById = async (id) => {
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            throw new Error('No se encontró la categoría');
        }
        return categoria;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateCategoria = async (id, updateData) => {
    try {
        const [updated] = await Categoria.update(updateData, { where: { id }, returning: true });
        if (updated === 0) {
            throw new Error('No se encontró la categoría para actualizar');
        }
        return await Categoria.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteCategoria = async (id) => {
    try {
        const deleted = await Categoria.destroy({ where: { id } });
        if (deleted === 0) {
            throw new Error('No se encontró la categoría para eliminar');
        }
        return { id };
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createCategoria,
    getAllCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
};
