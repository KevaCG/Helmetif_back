const express = require('express');
const router = express.Router();
const tallaController = require('../controllers/tallasController');

// Rutas para manejar tallas
router.post('/talla', tallaController.createTalla);
router.get('/talla', tallaController.getAllTallas);
router.get('/talla/:id', tallaController.getTallaById);
router.put('/talla/:id', tallaController.updateTalla);
router.delete('/talla/:id', tallaController.deleteTalla);

module.exports = router;