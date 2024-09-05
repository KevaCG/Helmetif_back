// src/controllers/marcaController.js
const marcaService = require('../services/marcaService');

const createMarca = async (req, res) => {
    try {
        const marcaData = { nombre_marca: req.body.nombre_marca };
        const marca = await marcaService.createMarca(marcaData);
        res.status(201).json(marca);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllMarcas = async (req, res) => {
    try {
        const marcas = await marcaService.getAllMarcas();
        res.status(200).json(marcas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMarcaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const marca = await marcaService.getMarcaById(id);
        res.status(200).json(marca);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateMarca = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updateData = { nombre_marca: req.body.nombre_marca };
        const updatedMarca = await marcaService.updateMarca(id, updateData);
        res.status(200).json(updatedMarca);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await marcaService.deleteMarca(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createMarca,
    getAllMarcas,
    getMarcaById,
    updateMarca,
    deleteMarca
};
