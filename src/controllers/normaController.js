// src/controllers/normaController.js
const normaService = require('../services/normaService');

const createNorma = async (req, res) => {
    try {
        const normaData = { norma: req.body.norma };
        const norma = await normaService.createNorma(normaData);
        res.status(201).json(norma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllNormas = async (req, res) => {
    try {
        const normas = await normaService.getAllNormas();
        res.status(200).json(normas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNormaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const norma = await normaService.getNormaById(id);
        res.status(200).json(norma);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateNorma = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updateData = { norma: req.body.norma };
        const updatedNorma = await normaService.updateNorma(id, updateData);
        res.status(200).json(updatedNorma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteNorma = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await normaService.deleteNorma(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createNorma,
    getAllNormas,
    getNormaById,
    updateNorma,
    deleteNorma
};
