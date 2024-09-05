const cascoService = require('../services/cascoService');
const upload = require('../middlewares/multerConfig');

// Controlador para crear un nuevo casco
const createCasco = async (req, res) => {
    upload.single('imagen')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        try {
            const imagePath = req.file ? `/imagenes/${req.file.filename}` : null;
            const cascoData = {
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                marca: req.body.marca,
                referencia: parseInt(req.body.referencia),
                cantidad: parseInt(req.body.cantidad),
                tallas: req.body.tallas,
                norma: req.body.norma,
                material: req.body.material,
                peso: parseFloat(req.body.peso),
                imagen: imagePath
            };
            const casco = await cascoService.createCasco(cascoData);
            res.status(201).json(casco);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
};

// Controlador para obtener todos los cascos
const getAllCascos = async (req, res) => {
    try {
        const cascos = await cascoService.getAllCascos();
        res.status(200).json(cascos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obtener un casco por id o referencia
const getCascoById = async (req, res) => {
    try {
        const { id } = req.params;
        const casco = await cascoService.getCascoByIdOrReferencia(id);
        res.status(200).json(casco);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Controlador para actualizar un casco por id o referencia
const updateCasco = async (req, res) => {
    upload.single('imagen')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        try {
            const { id } = req.params; // Obtener el id o referencia del parámetro de la URL
            const imagePath = req.file ? `/imagenes/${req.file.filename}` : null;
            const cascoData = {
                categoria: req.body.categoria,
                nombre: req.body.nombre,
                marca: req.body.marca,
                cantidad: parseInt(req.body.cantidad),
                tallas: req.body.tallas,
                norma: req.body.norma,
                material: req.body.material,
                peso: parseFloat(req.body.peso),
                imagen: imagePath
            };

            const updatedCasco = await cascoService.updateCascoByIdOrReferencia(id, cascoData);
            res.status(200).json(updatedCasco);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
};

// Controlador para eliminar un casco por id o referencia
const deleteCasco = async (req, res) => {
    try {
        const { id } = req.params;
        await cascoService.deleteCascoByIdOrReferencia(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createCasco,
    getAllCascos,
    getCascoById,
    updateCasco,
    deleteCasco
};
