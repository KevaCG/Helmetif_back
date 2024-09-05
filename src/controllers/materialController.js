// src/controllers/materialController.js
const materialService = require('../services/materialService');

const createMaterial = async (req, res) => {
    try {
        const materialData = { material: req.body.material };
        const material = await materialService.createMaterial(materialData);
        res.status(201).json(material);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllMaterials = async (req, res) => {
    try {
        const materials = await materialService.getAllMaterials();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMaterialById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const material = await materialService.getMaterialById(id);
        res.status(200).json(material);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateMaterial = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updateData = { material: req.body.material };
        const updatedMaterial = await materialService.updateMaterial(id, updateData);
        res.status(200).json(updatedMaterial);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteMaterial = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await materialService.deleteMaterial(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createMaterial,
    getAllMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};
