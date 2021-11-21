let db = require('../database/models')
let bcrypt = require('bcryptjs')

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
    agregarPost: function (req, res, next) {
        res.render('agregarPost', {})
    },
    busqueda: function (req, res) {
        let search = req.query.search
        posteos.findAll({
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
                    association: 'usuario'
                }, {
                    association: 'comentarios' //que tiene cada uno de esos posteos
                }]
            })
            .then(posteos => {
                return res.render("resultadoBusqueda", {
                    posteos: posteos
                });
            })
            .catch(error => {
                return res.send(error)
            })
    },
    savePost: (req, res) => {

    },
    borrarPost: (req, res) => {

    },
    editarPost: (req, res) => {

    },
    updatePost: (req, res) => {

    },
    comentar: (req, res) => {

    },
};

//exportamos la variable en la última línea del código para dejar disponible el código del controlador
module.exports = postController;