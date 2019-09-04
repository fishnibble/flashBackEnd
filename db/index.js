const mongoose = require("mongoose");
require('dotenv').config();

console.log(process.env.TEST);

mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;