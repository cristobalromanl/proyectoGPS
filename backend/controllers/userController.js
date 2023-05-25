const User = require('../models/user')

const createUser = (req,res)=>{
    const {nombre, email, password, rol} = req.body;
    const newUser = new User ({
        nombre,
        email,
        password,
        rol
    })
    newUser.save((error,user)=>{
        if(error){
            return res.status(400).send({message:"no se logró crear usuario"})
        }
        return res.status(201).send(user)
    })
}

const login = (req,res)=>{
    let email = req.body.email
    console.log(email)
    User.findOne({email},(error, user)=>{
        if(error){
            return res.status(400).send({message: 'Error al iniciar Sesion'})
        }
        if(!user){
            return res.status(404).send({message: 'No se encontro el usuario'})
        }

        res.cookie('token', createToken(user, {httpOnly: true}))
        console.log("Inicio correctamente")
        return res.status(200).send({message: 'Inicio de session correctamente', token: createToken(user), user: user})
    })
}

const checkToken = (req, res)=>{
    return res.status(200).send({message:'Token valido'})
}
const logout = (req, res)=>{
    res.clearCookie('token')
    return res.status(200).send({message:'Cerró la sesión correctamente'})
}

module.exports = {createUser};