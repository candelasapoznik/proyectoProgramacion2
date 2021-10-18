const db = require('../database/models');
const posteos = db.Posteos;

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
    }
}

module.exports = posteosController;