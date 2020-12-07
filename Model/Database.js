module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Database', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        connect_string: {
            type: DataTypes.STRING,
            unique: true
        },
        type: {
            type: DataTypes.ENUM('mongodb', 'mysql'),
            require: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            require: true
        },
        cron: {
            type: DataTypes.STRING,
            require: true
        },
    });
}