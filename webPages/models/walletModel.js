const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('NFTWallets', 'bollini', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

class Wallet extends Model { }
Wallet.init({
    collection: DataTypes.STRING,
    address: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    privateKey: DataTypes.STRING,
    publicKey: {
        type: DataTypes.STRING,
        unique: true
    },
    seedPhrase: DataTypes.STRING,
    received: DataTypes.BOOLEAN
}, {
    timestamps: false,
    sequelize
});

(async () => {
    await sequelize.sync({ alter: true });
})();

module.exports.Wallet = Wallet;