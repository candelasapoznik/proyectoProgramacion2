//Creo el modelo de Follower para generar la entidad y poder utilizar los metodos create y destroy

module.exports = function (sequelize, dataTypes) {

    let alias = "Seguidor";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        seguidor: {
            type: dataTypes.INTEGER,
        },
        seguido: {
            type: dataTypes.INTEGER,
        },
    };

    let config = {
        tableName: "seguidores",
        timestamps: false
    }

    const Seguidor = sequelize.define(alias, cols, config);

    Seguidor.associate = function (models) {
        Seguidor.belongsTo(models.Usuario, {
            as: 'Seguidor',
            foreignKey: 'seguidor'
        })
        Seguidor.belongsTo(models.Usuario, {
            as: 'Seguido',
            foreignKey: 'seguido'
        })
    }

    return Seguidor;

}