// src/controllers/categoriaController.js
const categoriaService = require('../services/categoriaService');

const createCategoria = async (req, res) => {
    try {
        const categoriaData = { nombre_categoria: req.body.nombre_categoria };
        const categoria = await categoriaService.createCategoria(categoriaData);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoriaService.getAllCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategoriaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const categoria = await categoriaService.getCategoriaById(id);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateCategoria = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updateData = { nombre_categoria: req.body.nombre_categoria };
        const updatedCategoria = await categoriaService.updateCategoria(id, updateData);
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCategoria = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await categoriaService.deleteCategoria(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createCategoria,
    getAllCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
};
