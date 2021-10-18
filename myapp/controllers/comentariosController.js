const db = require('../database/models');
const comentarios = db.Comentarios;

const comentariosController = {
    findAll : function (req, res) {
        // nuestro codigo para buscar mis datos en comentarios db
        comentarios.findAll()
            .then( data =>{
                return res.send(data);
            })
            .catch( error => {
                return res.send(error);
            })
    }
}

module.exports = comentariosController;