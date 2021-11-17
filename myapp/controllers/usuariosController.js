const db = require(`../models`);
const usuarios = db.Usuarios;

const usuariosController = {
    findAll : function (req, res) {
        // nuestro codigo para buscar mis datos en usuarios db
        usuarios.findAll()
            .then( data =>{
                return res.send(data);
            })
            .catch( error => {
                return res.send(error);
            })
    }
}

module.exports = usuariosController;