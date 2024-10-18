const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
})
const Message = new mongoose.model("Message", messageSchema);
module.exports = Message;