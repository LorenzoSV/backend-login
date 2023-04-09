const { Sequelize } = require('sequelize');
const arq = require("./config")
module.exports = new Sequelize(arq.development);
