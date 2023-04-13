import express from 'express';
import cors from 'cors';
import conectarDB from './config/db.js';
import router from './routes/index.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();

// conexion a la base de datos
conectarDB();

//conectar a port default o 4000
const port = process.env.PORT || 4000;

//habilitar PUG como template engine (temporal)
app.set('view engine', 'pug');

// habilitar public
app.use(express.static('public'));

// agregar router
app.use('/', router);

// puerto de inicio servidor
app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});