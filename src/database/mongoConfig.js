const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Banco conectado');
    } catch (e) {
        console.log('Error: ', e.message);
    }
};

module.exports = {
    connect
}