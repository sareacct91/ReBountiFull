const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    street: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 2,
    },
    zip: {
        type: Number,
        require: true,
        min: 10000,
        max: 99999,
    }
});

module.exports = addressSchema;
