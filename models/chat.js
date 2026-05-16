<<<<<<< HEAD
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({

    roomId: {
        type: String,
        required: true
    },

    sender: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    time: {
        type: Number,
        default: Date.now
    }

});

=======
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({

    roomId: {
        type: String,
        required: true
    },

    sender: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    time: {
        type: Number,
        default: Date.now
    }

});

>>>>>>> a414f257ee4008c4bf969ab87ceea62acde97535
module.exports = mongoose.model("Chat", chatSchema);