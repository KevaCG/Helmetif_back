// src/controllers/tallasController.js
const tallasService = require('../services/tallasService');

const createTalla = async (req, res) => {
    try {
        const tallaData = { talla: req.body.talla };
        const talla = await tallasService.createTalla(tallaData);
        res.status(201).json(talla);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllTallas = async (req, res) => {
    try {
        const tallas = await tallasService.getAllTallas();
        res.status(200).json(tallas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTallaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const talla = await tallasService.getTallaById(id);
        res.status(200).json(talla);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateTalla = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updateData = { talla: req.body.talla };
        const updatedTalla = await tallasService.updateTalla(id, updateData);
        res.status(200).json(updatedTalla);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTalla = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await tallasService.deleteTalla(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createTalla,
    getAllTallas,
    getTallaById,
    updateTalla,
    deleteTalla
};
