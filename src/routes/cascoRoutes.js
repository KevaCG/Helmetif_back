const express = require('express');
const cascoController = require('../controllers/cascoController');
const router = express.Router();

router.post('/crearCascos', cascoController.createCasco);
router.get('/traerCascos', cascoController.getAllCascos);
router.get('/traerCasco/:id', cascoController.getCascoById);
router.put('/editarCasco/:id', cascoController.updateCasco);
router.delete('/eliminarCasco/:id', cascoController.deleteCasco);

module.exports = router;
