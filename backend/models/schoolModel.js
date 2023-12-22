const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema({
  school_name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  contact: { type: Number, required: true },
  image: { type: String, required: true },
});

const SchoolModel = mongoose.model("school", schoolSchema);

module.exports = SchoolModel;
