const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

// Rutas para manejar marcas
router.post('/marca', marcaController.createMarca);
router.get('/marca', marcaController.getAllMarcas);
router.get('/marca/:id', marcaController.getMarcaById);
router.put('/marca/:id', marcaController.updateMarca);
router.delete('/marca/:id', marcaController.deleteMarca);

module.exports = router;