const express = require('express');
const router = express.Router();
const normaController = require('../controllers/normaController');

// Rutas para manejar normas
router.post('/norma', normaController.createNorma);
router.get('/norma', normaController.getAllNormas);
router.get('/norma/:id', normaController.getNormaById);
router.put('/norma/:id', normaController.updateNorma);
router.delete('/norma/:id', normaController.deleteNorma);

module.exports = router;