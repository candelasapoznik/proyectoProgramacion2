let db = require('../database/models')

const indexController = {
    index: function (req, res, next) {
        db.Posteo.findAll({
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
                ["createdAt", "DESC"]
            ],
        }).then(Posteo => {
            return res.render("index", {
                posteos: Posteo
            });
        }).catch(error => {
            return console.log(error)
        })
    }
}

module.exports = indexController;