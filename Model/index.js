const sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const _sequelize = new sequelize.Sequelize({
    dialect: 'sqlite',
    storage: 'db.Nelie',
    define: {
        timestamps: false
    }
});

const models = {};
fs.readdirSync('model/').forEach(function (filename) {
    if (filename !== 'index.js') {
        const _db = require(path.join(__dirname, filename))(_sequelize, sequelize.Sequelize.DataTypes);
        _db.sync();
        models[filename.replace(/\.[^/.]+$/, "")] = _db;
    }
});

module.exports = async function () {
    try {
        await _sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return models;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
