const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const usuarioRoutes = require('./routes/usuarios.routes');
const canchaRoutes = require('./routes/canchas.routes');
const categoriaRoutes = require('./routes/categorias.routes');
const clubRoutes = require('./routes/clubes.routes');
const insumoRoutes = require('./routes/insumos.routes');
const reservaRoutes = require('./routes/reservas.routes');

const app = express();

dotenv.config();

app.set('port', process.env.PORT);

app.use(cors());
app.use(express.json());
app.options('*', cors());

app.get('/', (_req, res) => res.json('API Sportify'));
app.use('/api', usuarioRoutes);
app.use('/api', canchaRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', clubRoutes);
app.use('/api', insumoRoutes);
app.use('/api', reservaRoutes);

module.exports = app;