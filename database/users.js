const mongoose = require("mongoose");

//create movies schema
const UsersSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
const UsersModel = mongoose.model("Users", UsersSchema);
module.exports = UsersModel;
 