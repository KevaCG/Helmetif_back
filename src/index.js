const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/connection');

// Importar rutas
const cascoRoutes = require('./routes/cascoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const marcaRoutes = require('./routes/marcaRoutes');
const tallaRoutes = require('./routes/tallasRoutes');
const normaRoutes = require('./routes/normaRoutes');
const materialRoutes = require('./routes/materialRoutes');

// Cargar variables de entorno
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Puerto que utilizará el servidor

app.use(bodyParser.json());

// Configuración de rutas
app.use('/api', cascoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/marcas', marcaRoutes);
app.use('/api/tallas', tallaRoutes);
app.use('/api/normas', normaRoutes);
app.use('/api/materiales', materialRoutes);

// Verificar conexión a la base de datos y sincronizar modelos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a PostgreSQL exitosa');
        return sequelize.sync({ alter: true }); // Sincronizar los modelos con la base de datos
    })
    .then(() => {
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
