const express = require('express');
const bodyParser = require('body-parser');
const cascoRoutes = require('./routes/cascoRoutes');
const sequelize = require('./models/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Puerto que utilizará el servidor

app.use(bodyParser.json());

// Rutas del CRUD para cascos
app.use('/api', cascoRoutes);

// Verificar conexión a la base de datos y sincronizar modelos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a PostgreSQL exitosa');
        return sequelize.sync(); // Sincronizar los modelos con la base de datos
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
