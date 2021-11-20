module.exports = function(sequelize, dataTypes){
    //Definir un alias
    let alias = "Usuario"; //Con este alias sequelize va a identificar internamente al archivo de modelo.

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
        nombreDeUsuario: {
            type: dataTypes.STRING,
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
        fechaDeNacimiento: {
            type: dataTypes.DATE,
            },
        fotoDePerfil:{
            type: dataTypes.STRING
            },
        createdAt:{
            type: dataTypes.DATE,
            },
        updatedAt:{
            type: dataTypes.DATE,
            },
        }

    let config = {
        timestamps: true, //porque la tabla tiene los campos created_at y updated_at
        underscored:false,  //los nombres de las columnas (las propiedades) en la db no tienen guiones bajos en lugar del formato camelCase.   
        tableName: "Usuarios"
    }
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = (models) => {
        Usuario.hasMany(models.posteo, {
            as: 'Posteos',
            foreignKey: 'idUsuarioQueLoCreo'
        });
        Usuario.hasMany(models.comentario,{
            as: 'Comentarios',
            foreignKey: 'idUsuarioQueLoCreo'
        })
    }
return Usuario; 
} 