// src/routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rutas para manejar categorías
router.post('/categoria', categoriaController.createCategoria);
router.get('/categoria', categoriaController.getAllCategorias);
router.get('/categoria/:id', categoriaController.getCategoriaById);
router.put('/categoria/:id', categoriaController.updateCategoria);
router.delete('/categoria/:id', categoriaController.deleteCategoria);

module.exports = router;
