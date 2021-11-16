module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Comentario"; 

    //Describir la configuración de las columnas de la tabla
    let cols = {
        idPostComentario: {
            type: dataTypes.INTEGER
            },
        idUsuarioQueLoCreo: {
            type: dataTypes.INTEGER
            },
        idPost: {
            type: dataTypes.INTEGER
            },
        textoComentario: {
            type: dataTypes.STRING
            },
        fechaDeCreacion: {
            type: dataTypes.DATE
        }
        }
      
    let config = {
        timestamps:false,
        underscored:true,
        tableName: "Comentarios"
    }

    const Comentario = sequelize.define(alias, cols, config); 
    return Comentario; 
}