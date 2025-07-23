const express = require('express');
const cors = require('cors');
const plannerRoutes = require('./routes/planner');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Tu frontend
app.use(express.static('public'));

// Rutas del planificador IA
app.use('/api', plannerRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
