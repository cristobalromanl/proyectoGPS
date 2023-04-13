import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const conectarDB = async() => {
    try{
        const db = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            autoIndex: true,
            keepAlive: true,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`mondoDb conectado en: ${url} `)
    }catch(error){
        console.log(`error : ${error}`);
        process.exit(1);
    }
}

export default conectarDB;