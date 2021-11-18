let db = require('../database/models')
let bcrypt = require('bcryptjs')

const indexController={
    index: function (req,res,next){
        db.Posteo.findAll(
            ({include:[
                { association: "usuarios" },
                { association: "comentarios" }
            ],
                order:[["createdAt","DESC"]],
            }).then(Posteo=> {
                return res.render("index", {Posteo: Posteo});
            }).catch(error => {
                return res.send(error)       
            })
        )
    }
}    
      
module.exports= indexController;
