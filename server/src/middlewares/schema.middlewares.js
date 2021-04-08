const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    uid: { type: mongoose.Types.ObjectId, auto: true },
    email: { type: String },
    displayName: { type: String },
//  photoURL: { type: format },
    emailVerified: { type: String },
  },
  { versionKey: "myVersionKey" }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
