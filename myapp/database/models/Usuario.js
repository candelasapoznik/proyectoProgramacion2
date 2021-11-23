module.exports = function (sequelize, dataTypes) {
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
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        document: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.STRING
        },
        fechaDeNacimiento: {
            type: dataTypes.DATE,
        },
        fotoDePerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        timestamps: true, //porque la tabla tiene los campos created_at y updated_at
        underscored: false, //los nombres de las columnas (las propiedades) en la db no tienen guiones bajos en lugar del formato camelCase.   
        tableName: "Usuarios"
    }
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Posteo, {
            as: 'Posteos',
            foreignKey: 'usuario_id'
        });
        Usuario.hasMany(models.Comentario, {
            as: 'Comentarios',
            foreignKey: 'usuario_id'
        })
        Usuario.hasMany(models.Seguidor, {
            as: 'Seguidor',
            foreignKey: 'seguidor'
        });
        Usuario.hasMany(models.Seguidor, {
            as: 'Seguido',
            foreignKey: 'seguido'
        })
    }
    return Usuario;
}