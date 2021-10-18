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
        email:{
            type: dataTypes.VARCHAR,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.DATE,
        },
        fecha:{
            type: dataTypes.DATETIME,
        },
        nombre:{
            type: dataTypes.INTEGER,
        },
        apellido:{
            type: dataTypes.VARCHAR
        },
        edad:{
            type: dataTypes.INTEGER
        }
    }

    let configuracionDeLaTabla = {
        tableName: 'usuarios', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Usuarios = sequelize.define(alias, columnas, configuracionDeLaTabla);

   return Usuarios;
}