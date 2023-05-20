const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/CyberNautsformAssingment")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cinfirmpassword: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
