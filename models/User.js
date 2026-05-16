<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    points: {
        type: Number,
        default: 0
    },

    email: {
        type: String,
        default: ""
    },

    address: {
        type: String,
        default: ""
    },

    profilePhoto: {
        type: String,
        default: ""
    },

    bio: {
        type: String,
        default: ""
    },

    /* OLD FRIEND SYSTEM */
    friends: {
        type: [String],
        default: []
    },

    friendRequests: {
        type: [String],
        default: []
    },

    /* NEW FOLLOW SYSTEM */
    followers: {
        type: [String],
        default: []
    },

    following: {
        type: [String],
        default: []
    },

    /* NOTIFICATIONS */
    notifications: {
        type: [String],
        default: []
    },

    /* SOLVED QUESTIONS */
    solvedQuestions: {
        type: [String],
        default: []
    },

    /* HELP REQUESTS */
    helpRequests: {
        type: [{
            from: String,
            question: String,
            desc: String,
            example: String,
            time: Number,
            status: String
        }],
        default: []
    },

    /* PERMANENT CHAT ROOMS */
    activeChats: {
        type: [String],
        default: []
    }

});

=======
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    points: {
        type: Number,
        default: 0
    },

    email: {
        type: String,
        default: ""
    },

    address: {
        type: String,
        default: ""
    },

    profilePhoto: {
        type: String,
        default: ""
    },

    bio: {
        type: String,
        default: ""
    },

    /* OLD FRIEND SYSTEM */
    friends: {
        type: [String],
        default: []
    },

    friendRequests: {
        type: [String],
        default: []
    },

    /* NEW FOLLOW SYSTEM */
    followers: {
        type: [String],
        default: []
    },

    following: {
        type: [String],
        default: []
    },

    /* NOTIFICATIONS */
    notifications: {
        type: [String],
        default: []
    },

    /* SOLVED QUESTIONS */
    solvedQuestions: {
        type: [String],
        default: []
    },

    /* HELP REQUESTS */
    helpRequests: {
        type: [{
            from: String,
            question: String,
            desc: String,
            example: String,
            time: Number,
            status: String
        }],
        default: []
    },

    /* PERMANENT CHAT ROOMS */
    activeChats: {
        type: [String],
        default: []
    }

});

>>>>>>> a414f257ee4008c4bf969ab87ceea62acde97535
module.exports = mongoose.model("User", userSchema);