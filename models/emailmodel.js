const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    }
})
const Email = new mongoose.model("Emails", emailSchema);
module.exports = Email;