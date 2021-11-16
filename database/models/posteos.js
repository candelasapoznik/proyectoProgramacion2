module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Posteo"; 

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
        underscored:true,
        tableName: "Posteos"
    }

    const Posteo = sequelize.define(alias, cols, config); 
    return Posteo; 
}