module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Cron', {
        database_id: {
            type: DataTypes.NUMBER,
            unique: true,
            require: true,
            primaryKey: true
        },
        minutes: DataTypes.STRING,
        hours: DataTypes.STRING,
        days: DataTypes.STRING,
        months: DataTypes.STRING,
        weekday: DataTypes.STRING
    });
}