let db = require('../database/models')
let bcrypt = require('bcryptjs')
let op = db.Sequelize.Op
// defino una variable que contiene el OL donde escribimos los métodos que se van a encargar de manejar los request.
const postController = {
    //metodo para cada request particular 
    detailPost: function (req, res, next) {
        let idPost = req.params.id; // capturo el id que viaja en la url con req.params.id y lo meto en la variable idPost
        db.Posteo.findByPk(idPost, {
            include: [{
                    association: "Usuario"
                },
                {
                    association: "Comentarios",
                    include: {
                        association: "Usuario"
                    }
                }
            ],
            order: [
                ["Comentarios", "id", "DESC"]
            ],
        }
            ).then(post => {
                return res.render("detallePost", {
                    post: post
                });
            }).catch(error => {
                return console.log(error)
            })
    },
    busqueda: function (req, res) {
        let search = req.query.search //imput referencia por el search en el indexhtml 
        db.Posteo.findAll({
                where: [{
                    caption: {
                        [op.like]: `%${search}%`
                    }
                }],
                order: [
                    ["createdAt", 'DESC']
                ],
                limit: 10,
                offset: 0,
                include: [{
                    association: 'Usuario'
                }, {
                    association: 'Comentarios' //que tiene cada uno de esos posteos
                }]
            })
            .then(posteos => {
                //res.send(posteos)
                return res.render("resultadoBusqueda", { //se vea adentro de la vista
                    posteos: posteos //como lo voy a nombrar en las vistas
                });
            })
    },
    agregarPost: function (req, res, next) {
        if (!req.session.usuario) {
            res.redirect("/users/login");
        }
        res.render('agregarPost', {})
    },
    savePost: (req, res) => {
        //lo opuesto es !, si no exite o es falso
        if(!req.body.caption || !req.file){
            errors.message = "El campo de caption y agregar file no puede estar vacio";
            res.locals.error = errors;
            return res.render("agregarPost");
        }
        req.body.image = (req.file.destination + req.file.filename).replace('./public', '');
      db.Posteo.create({
          //req.body que es un objeto lo divide entre las propiedades
        image: req.body.image,
        caption: req.body.caption,
        usuario_id: req.session.usuario_id
      }).then(post => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
    },
    borrarPost: (req, res) => {
        db.Posteo.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(info =>{
            res.redirect('/')
        })
        .catch(error => {
            return res.render(error);
        })
    },
    editarPost: (req, res) => {
        db.Posteo.findByPk(req.params.id)
        .then(posteo =>{
            console.log(posteo)
            if(!req.session.usuario || req.session.usuario.id!=posteo.usuario_id){
                res.redirect("/")
            }
            res.render("editarPost", {posteo: posteo})       
        }).catch(error => {
            return res.render(error);
          })

    },
    updatePost: (req, res) => {
        //lo opuesto es !, si no exite o es falso
        if(!req.body.caption){
            res.send(req.body)
        }
        if(req.file){
            req.body.image = (req.file.destination + req.file.filename).replace('./public', '');
      db.Posteo.update({
          //req.body que es un objeto lo divide entre las propiedades
        ...req.body,
      },{
          where:{
              id:req.params.id
          }
      }).then(post => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
        } 
        else {
            db.Posteo.update({
                //por si queres actualizar solo la caption
              caption: req.body.caption
            },{
                where:{
                    id:req.params.id
                }
            }).then(post => {
              res.redirect('/');
            }).catch(error => {
              return res.render(error);
            })
        }       
    },
    comentar: (req, res) => {
        if(!req.session.usuario){
            res.redirect('/users/login')
        }
        db.Comentario.create({
            comentario: req.body.comentario, //Para obtener los datos del formulario en el controlador usaremos la propiedad  body dentro del objeto request: req.body que es un objeto literal. 
            usuario_id: req.session.usuario.id,
            idPost: req.params.id
        })
        .then(comentario=>{
            //req.params.id para agrrar el id que pase por parametro
            res.redirect('/posts/detallePost/id/' + req.params.id)
        })
    },
};

//exportamos la variable en la última línea del código para dejar disponible el código del controlador
module.exports = postController;