let db = require('../database/models')
let bcrypt = require('bcryptjs');
const Usuario = require('../database/models/Usuario');

const userController={
    register: function (req,res){
        res.render('registracion')
    },
    registerPost:function (req,res){
        let contrasenaEncriptada = bcrypt.hashSync(req.body.contrasena, 10)
        console.log(contrasenaEncriptada)
        db.Usuario.create({
            nombreDeUsuario: req.body.nombreDeUsuario,
            email: req.body.email,
            contrasena: contrasenaEncriptada,
            fechaDeNacimiento: req.body.fechaDeNacimiento,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        })
        .then(Usuario => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    },
    login: function(req,res){
        res.render('login')
    },
    processLogin: function (req, res) {
        let errors={}
        db.Usuario.findOne({
                where:[{mail: req.body.mail}],
        })
        .then(usuario =>{
            if((req.body.email==undefined)){
                    errors.mensaje="Los datos son incorrectos";
                    errors=res.locals.errors;
                    return res.render("login")
            }else if(bcrypt.compareSync(req.body.contrasena, usuario.contrasena)==false){
                    if(req.body.contrasena==usuario.contrasena){
                            email=req.session.email
                            if(req.body.recordame != null){
                            res.cookie('usuarioId', usuario.id, {maxAge: 1000 * 60 * 60})
                            return res.redirect('/')    
                    }else{
                            errors.mensaje="Los datos son incorrectos";
                            errors=res.locals.errors;
                            return res.render("login")
                    }      
                }
            }else {
                    email=req.session.email
                    if(req.body.recordame != null){
                            res.cookie('usuarioId', user.id, {maxAge: 1000 * 60 * 60})
                    }
                    return res.redirect('/')
            }
        })
        .catch(error => {
            return res.send(error)      
    });
},    
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('usuarioId');
        return res.redirect('/');
    },
    detail: function (req,res){ 
        let id = req.params.id
        db.Usuario.findByPk(id)
        .then(Usuario => {
            return res.render('detalleUsuario', {Usuario: Usuario})
        })
        .catch( error => {
            return res.send(error);
        })
    },
    profile: function (req,res){
        res.render('miPerfil');
    },
    editProfile: function (req,res,next){
        res.render('editarMiPerfil',{})
    }
};
    module.exports = usersController
