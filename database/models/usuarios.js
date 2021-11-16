module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Usuario"; 


    //Describir la configuración de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
        nombre: {
            type: dataTypes.STRING
            },
        apellido: {
            type: dataTypes.STRING
            },
        edad: {
            type: dataTypes.INTERGER
            },
        email: {
            type: dataTypes.STRING
            },
        documento: {
            type: dataTypes.INTERGER
            },
        contrasena: {
            type: dataTypes.STRING
            },
        foto_de_perfil:{
            type: dataTypes.STRING
            },
        foto_de_perfil:{
            type: dataTypes.STRING
            }
        }
      
    let config = {
        timestamps:false,
        underscored:true,
        tableName: "Usuarios"
    }

    const Usuario = sequelize.define(alias, cols, config); 
    return Usuario; 
}