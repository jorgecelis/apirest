const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    uid: { type: mongoose.Types.ObjectId },
    email: { type: String },
    displayName: { type: String },
    //  photoURL: { type: format },
    emailVerified: { type: Boolean },
    admin: false,
  }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
