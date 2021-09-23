const comentarios = require('../data/comentarios');
const postController={
    detailPost: function (req,res,next){
        for (let index = 0; index < comentarios.lista.length; index++) {
            if (comentarios.lista[index].id==req.params.id) {
                return res.render('detallePost',{ detallePost: comentarios.lista[index]})
            }
        }
    },
    agregarPost: function (req,res,next){
        res.render('agregarPost',{})
        }
};
module.exports= postController;