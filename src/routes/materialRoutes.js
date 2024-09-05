const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// Rutas para manejar materiales
router.post('/material', materialController.createMaterial);
router.get('/material', materialController.getAllMaterials);
router.get('/material/:id', materialController.getMaterialById);
router.put('/material/:id', materialController.updateMaterial);
router.delete('/material/:id', materialController.deleteMaterial);

module.exports = router;