module.exports = function (sequelize, dataTypes) {
    //Definir un alias
    let alias = "Comentario"; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        idPost: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        timestamps: true, //Si la tabla tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.    
        tableName: "Comentarios"
    }

    const Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'usuario_id'
        })
    }
    return Comentario;

}