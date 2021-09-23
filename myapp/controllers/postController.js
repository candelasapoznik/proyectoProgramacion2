const postController={
    detailPost: function (req,res,next){
        for (let index = 0; index < comentarios.lista.length; index++) {
            if (comentarios.lista[index].id==req.params.id) {
                return res.render('detallePost',{ detallePost: comentarios.lista[index]})
            }
        }
    },
    agregarPost: function (req,res,next){
        for (let index = 0; index < posteos.lista.length; index++) {
            if (comentarios.lista[index].id==req.params.id) {
                return res.render('agregarPost',{ agregarPost: comentarios.lista[index]})
            }
        }
    }
};
module.exports=detallePostController;