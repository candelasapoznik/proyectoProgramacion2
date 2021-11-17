module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Usuarios'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let columnas = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING,
        },
        fecha_creacion:{
            type: dataTypes.DATE,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        },
        post_id:{
            type: dataTypes.INTEGER,
        },
    }

    let configuracionDeLaTabla = {
        tableName: 'comentarios', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Comentarios = sequelize.define(alias, columnas, configuracionDeLaTabla);

   return Comentarios;
}