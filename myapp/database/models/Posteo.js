module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Posteos'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let columnas = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.VARCHAR,
        },
        descrip:{
            type: dataTypes.INTEGER,
        },
        fecha_creacion:{
            type: dataTypes.DATETIME,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        },
    }

    let configuracionDeLaTabla = {
        tableName: 'posteos', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Posteos = sequelize.define(alias, columnas, configuracionDeLaTabla);

   return Posteos;
}