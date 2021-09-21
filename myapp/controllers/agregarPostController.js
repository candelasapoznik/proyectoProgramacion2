const agregarPostController={
    index: function (req,res,next){
        res.render('agregarPost',
        {listadoDePosteos: posteo});
    }
};
module.exports=agregarPostController;
