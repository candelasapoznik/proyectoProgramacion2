const detallePostController={
    index: function (req,res,next){
        res.render('detallePost',
        {listadoDePosteos: posteo});
    }
};
module.exports=detallePostController;