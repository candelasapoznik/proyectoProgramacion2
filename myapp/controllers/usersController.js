let db = require('../database/models')
let bcrypt = require('bcryptjs');
let op = db.Sequelize.Op;

const userController = {
    //solo se puede acceder a la página de registración si no hay un usuario logeado
    register: function (req, res) {
        if (req.session.usuario == undefined) {
            res.render('registracion')
        } else {
            res.redirect("/")
        }
    },
    registerPost: function (req, res) {
        let contrasenaEncriptada = bcrypt.hashSync(req.body.password, 10)
        console.log(contrasenaEncriptada)
        let errors = {}
        if (req.body.email == "" || req.body.email == req.session.email) {
            errors.message = "El campo de email no puede estar vacio ni puede estar repetido en la base de datos";
            res.locals.error = errors;
            res.render('registracion');
            if (req.body.password == "" || req.body.password.length <= 4) {
                errors.message = "El campo de contraseña no puede estar vacio y debe tener al menos tres caracteres";
                res.locals.error = errors;
                res.render("registracion");
                res.redirect('/users/registracion')
            }
        } else {
            req.body.fotoDePerfil = (req.file.destination + req.file.filename).replace('./public', '');
            db.Usuario.create({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    nombreDeUsuario: req.body.nombreDeUsuario,
                    edad: req.body.edad,
                    email: req.body.email,
                    document: req.body.document,
                    password: contrasenaEncriptada,
                    fechaDeNacimiento: req.body.fechaDeNacimiento,
                    fotoDePerfil: req.file.filename
                })
                .then(usuario => {
                    res.redirect("/users/login");
                })
                .catch(error => {
                    console.log(error);
                    res.send(error)
                })
        }
    },
    //solo se puede acceder a la página de login si no hay un usuario logeado
    login: function (req, res) {
        if (req.session.usuario == undefined) {
            res.render('login')
        } else {
            res.redirect("/")
        }
    },
    processLogin: function (req, res) {
        let errors = {}
        db.Usuario.findOne({
                where: [{
                    email: req.body.email
                }],
            })
            .then(usuario => {
                if (req.body.email == undefined) {
                    errors.message = "Los datos son incorrectos";
                    errors = res.locals.errors;
                    return res.render("login")
                } else if (bcrypt.compareSync(req.body.password, usuario.password) == false) {
                    errors.message = "Contraseña incorrecta";
                    errors = res.locals.errors;
                    return res.render("login")
                } else {
                    console.log('creo la session')
                    email = req.session.email
                    req.session.usuario = usuario
                    if (req.body.recordame != null) {
                        res.cookie('usuarioId', usuario.id, {
                            maxAge: 1000 * 60 * 60
                        })
                        return res.redirect('/')
                    }
                    email = req.session.email
                    if (req.body.recordame != null) {
                        res.cookie('usuarioId', user.id, {
                            maxAge: 1000 * 60 * 60
                        })
                    }
                    return res.redirect('/')
                }
            })
            .catch(error => {
                return res.send(error)
            });
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('usuarioId');
        return res.redirect('/');
    },
    //Crear metodo de detalle de usuario, buscandolo por el parametro de la ruta
    detail: function (req, res) {
        //Busco al usuario por el parametro
        let id = req.params.id
        db.Usuario.findByPk(id, {
                include: [{
                    association: "Seguidor"
                }, {
                    association: "Seguido"
                }, {
                    association: "Posteos"
                }]
            })
            .then(usuarios => {
                //Verifico si el usuario encontrao es seguido por el usuario en sesion
                let loSigue = false
                if (req.session.user) {
                    for (let i = 0; i < usuarios.Seguidor.length; i++) {
                        if (req.session.user.id == usuarios.Seguidor[i].id) {
                            loSigue = true
                        }
                    }
                }
                res.render('detalleUsuario', {
                    usuarios: usuarios,
                    loSigue: loSigue,
                    posteos: usuarios.Posteos
                })
            })
            .catch(error => {
                return res.send(error);
            })
    },
    //Crear metodo de perfil, buscandolo por el id de la session del usuario y validar que la misma exista 
    profile: function (req, res) {
        //Valido si existe session
        if (req.session.user) {
            //Busco al usuario por el id de la session y envio sus datos a la vista
            db.Usuario.findByPk(req.session.user.id)
                .then(usuarios => {
                    res.render('miPerfil', {
                        usuarios: usuarios
                    })
                })
        } else {
            res.redirect("/users/login")
        }
    },
    follow: function (req, res) {
        //Valido si existe session
        if (req.session.user) {
            //Creo el registro en la tabla Seguidores
            db.Seguidor.create({
                    seguidor: req.session.user.id,
                    seguido: req.params.id
                })
                .then(user => {
                    res.redirect("/users/detalleUsuario/" + req.params.id)
                })

        } else {
            res.redirect("/users/login")
        }


    },
    //Crear metodo unfollow que permita eliminar un registro en la tabla intermedia
    unfollow: function (req, res) {
        //Valido si existe session
        if (req.session.user) {
            db.Seguidor.destroy({
                    where: {
                        [op.and]: [{
                                seguidor: req.session.user.id
                            },
                            {
                                seguido: req.params.id
                            }
                        ]
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
    test: function (req, res) {
        db.Usuario.findByPk(3, {
                include: [{
                    association: "seguidor"
                }, {
                    association: "seguido"
                }]
            })
            .then(user => {
                res.send(user)
            })

    },
    search: function (req, res) {
        let search = req.query.search //imput referencia por el search 
        db.Usuario.findAll({
                where: [{
                    'nombreDeUsuario': {
                        [op.like]: `%${search}%`
                    }
                }],
                order: [
                    ['nombreDeUsuario', 'DESC'],
                ],
                limit: 10,
                include: [{
                    all: true,
                    nested: true
                }],
            })
            .then(usuario => {
                //res.send(usuario)
                return res.render("resultadosSearch", {
                    usuarios: usuario
                });
            })
    }
};

module.exports = userController;