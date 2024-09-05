const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Carpeta destino para las imágenes
const uploadPath = path.join(__dirname, '../imagenes');

// Verificar si la carpeta de destino existe, y crearla si no
if (!fs.existsSync(uploadPath)) {
    console.log('La carpeta "imagenes" no existe. Creándola ahora...');
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log('Carpeta "imagenes" creada exitosamente.');
} else {
    console.log('La carpeta "imagenes" ya existe.');
}

// Configuración del almacenamiento de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath); // Carpeta de destino para las imágenes
    },
    filename: (req, file, cb) => {
        // Crear un nombre único para el archivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
