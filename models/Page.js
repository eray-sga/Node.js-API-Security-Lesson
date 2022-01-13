const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});


const Page = mongoose.model("Page", PageSchema);
module.exports = Page;
