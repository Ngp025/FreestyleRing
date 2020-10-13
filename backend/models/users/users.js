const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    // ---------------- Login
    email: {
      type: String,
      //required: true,
      unique: true,
      match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
    },
    provider: {
      type: String,
      default: 'null',
    },
    language: {
      type: String,
      default: 'es',
    },
    teams: { type: Array, default: [] },

    // ---------------- Info del settings
    name: {
      type: String,
    },
    mcName: {
      type: String,
    },
    born: {
      type: String,
    },
    phone: {
      type: String,
      default: '',
    },
    address: {
      type: String,
    },
    document: {
      type: String,
      default: 0,
    },
    link: {
      type: String,
    },
    social: {
      type: String,
    },
    // ---------------- Para Menos de 16

    tutorsName: {
      type: String,
      default: ' - ',
    },

    tutorsDocument: {
      type: String,
      default: ' - ',
    },
    // ---------------- Vista de favoritos

    // ---------------- Terminos y Condiciones
    termAgreed: {
      type: Boolean,
      default: true,
    },
    /*
     *iPinfo: {
     *	type: Object,
     *	default: {},
     *},
     */
  },
  {
    //Creado y usado el dia
    timestamps: true,
  }
);

module.exports = User = mongoose.model('users', UserSchema);
