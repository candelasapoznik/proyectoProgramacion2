module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Comentario"; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        idPostComentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
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
        createdAt:{
            type: dataTypes.DATE,
            },
        updatedAt:{
            type: dataTypes.DATE,
            }
        }

    let config = {
        timestamps:true,  //Si la tabla no tiene los campos created_at y updated_at
        underscored:false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.    
        tableName: "Comentarios"
    }

    const Comentario = sequelize.define(alias, cols, config); 
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario,{
            as: 'usuarios',
            foreignKey: 'idUsuarioQueLoCreo'
        })
    return Comentario; 
    }
} 