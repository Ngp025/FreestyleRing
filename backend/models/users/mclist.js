const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    // ---------------- Login
    name: {
      type: String,
      default: '',
    },
    mcname: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      require: true
    },
    social: {
      type: String,
      require: true
    },
    pts: {
      type: Number,
      require: true,
    },
  },
);

module.exports = Mclist = mongoose.model('mclist', UserSchema);
