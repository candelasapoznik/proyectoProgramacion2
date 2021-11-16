module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Posteo"; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
        idUsuarioQueLoCreo: {
            type: dataTypes.INTEGER
            },
        caption: {
            type: dataTypes.STRING
            },
        fechaDeCreacion: {
            type: dataTypes.DATE
        },
        imagen:{
            type: dataTypes.STRING
            }
        }
      
    let config = {
        timestamps:false,
        underscored:false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase. 
        tableName: "Posteos"
    }

    const Posteo = sequelize.define(alias, cols, config); 
    Posteo.associate = function(models){
        Posteo.belongsTo(models.Usuario,{
            as: 'Usuarios',
            foreignKey: 'idUsuarioQueLoCreo'
        }),
        Posteo.hasMany(models.Comentario,{
            as: 'Comentarios',
            foreignKey: 'idUsuarioQueLoCreo'
        })
    }
    return Posteo; 
}