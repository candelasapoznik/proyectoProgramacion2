const db = require('../database/models/Posteo');
const posteos = db.Posteos;
const op = db.Sequelize.Op

const posteosController = {
    findAll : function (req, res) {
        // nuestro codigo para buscar mis datos en posteos db
        posteos.findAll()
            .then( data =>{
                return res.send(data);
            })
            .catch( error => {
                return res.send(error);
            })
    },
    search: function (req, res) {
        let search = req.query.search
        posteos.findAll({
            where: [
                {'campoTextoDescriptivo': {[op.like]:`%${search}%`}}
            ],
            order: [
                ['fechaDeCreacion','DESC']
            ],
            limit:10,
            offset:0
        })
        include: [{
            association: 'usuario'
        }, {
            association: 'comentarios'
        }]
        .then( posteos => {
            return res.render("resultadoBusqueda",{
                posteos: posteos
            });
        })
        .catch(error => {
            return res.send(error)
        })
    }
}
module.exports = posteosController;