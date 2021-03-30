const mongoose = require("mongoose");
let Schema = mongoose.Schema;


const userSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  nombre: { type: String },
  correo: { type: String },
  telefono: { type: Number }
}, { versionKey: 'myVersionKey' });


const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
