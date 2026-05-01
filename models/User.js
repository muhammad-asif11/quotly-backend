const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    surname: {
      type: String,
      require: true,
    },
    number: {
      type: Number,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("User", userSchema);
