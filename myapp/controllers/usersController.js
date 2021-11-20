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
            edad: req.body.edad,
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
    //Crear metodo de detalle de usuario, buscandolo por el parametro de la ruta
    detail: function (req,res){ 
        //Busco al usuario por el parametro
        let id = req.params.id
        db.Usuario.findByPk(id, {
            include: [{association: "seguidor"}, {association: "seguido"}]
        })
        .then(usuarios => {
            //Verifico si el usuario encontrao es seguido por el usuario en sesion
            let loSigue = false
            for(let i = 0; i < usuarios.seguidor.length; i++){
                if(req.session.user.id == usuarios.seguidor[i].id){
                    loSigue = true
                }
            }
            res.render('detalleUsuario', {usuarios: usuarios, loSigue: loSigue})
        })
        .catch( error => {
            return res.send(error);
        })
    },
    //Crear metodo de perfil, buscandolo por el id de la session del usuario y validar que la misma exista 
    profile: function (req,res){
        //Valido si existe session
        if(req.session.user){
            //Busco al usuario por el id de la session y envio sus datos a la vista
            db.Usuario.findByPk(req.session.user.id)
            .then(usuarios => {
                res.render('miPerfil',{usuarios: usuarios})
            })
        } else {
            res.redirect("/users/login")
        }
    },
    editProfile: function (req,res){

        let perfil = db.Usuario.findByPk(req.session.user.id);

        let usuarios= db.Usuario.findAll()
        //voy a necesitar recibir los datos de mi perfil pero a su vez mi formulario recibe los datos de usuarios
        Promise.all([perfil, usuarios])

        .then(([perfil, usuarios]) => {
            res.render('editarMiPerfil',{usuarios: usuarios, perfil: perfil})
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        }) 
    },
    updateProfile: function (req,res){
        let id = req.session.user.id
        
        //el método update recibe dos parámetros (ambos Obj Literales): todos los campos a modificar y el where, con el param filtrado. 
        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreDeUsuario: req.body.nombreDeUsuario,
            edad: req.body.edad,
            email: req.body.email,
            contrasena: req.body.constrasena,
            fotoDePerfil: req.body.fotoDePerfil,
        },
        {
            where: {
                id: id
            }
        })
        .then(usuario => {
            res.redirect("/users/miPerfil/" + id)
        })   
    },
    //Crear metodo follow que permita crear un registro en la tabla intermedia
    follow: function(req, res){
        //Valido si existe session
        if(req.session.user){
            //Creo el registro en la tabla Seguidores
            db.Seguidor.create({
                seguidor: req.session.user.id,
                seguido: req.params.id
            })
            .then(user => {
                res.redirect("/users/detalleUsuario/" + req.params.id )
            })

        } else {
            res.redirect("/users/login")
        }


    },
    //Crear metodo unfollow que permita eliminar un registro en la tabla intermedia
    unfollow: function(req, res){
        //Valido si existe session
        if(req.session.user){
            db.Seguidor.destroy({
                where: {
                    [op.and]: [
                        { seguidor: req.session.user.id },
                        { seguido: req.params.id }]
                }
            })
            .then(user => {
                res.redirect("/users/detalleUsuario/" + req.params.id)
            })
        } else {
            res.redirect("/users/login")
        }
        //Elimino con el metodo destroy el registro de la tabla intermedia
    },
    test: function(req,res){
        db.Usuario.findByPk(3, {
            include: [{association: "seguidor"}, {association: "seguido"}]
        })
        .then(user =>{
            res.send(user)
        })

    }
};

module.exports = userController;
