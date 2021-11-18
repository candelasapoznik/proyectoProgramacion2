let db = require('../database/models')
let bcrypt = require('bcryptjs')

const userController={
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
};
    module.exports = usersController
