const mongoose = require('mongoose');

//console.log(process.env.PORT)

const uri = "mongodb+srv://nicolas025:B8t9IIxWqrrA8iEc@cluster0.era5t.mongodb.net/misionhiphop?retryWrites=true&w=majority"

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function (err, res) {
    if (err) {
      console.log(err, 'Unable to connect to the server. check database.js');
    } else {
      console.log('DB is connected');
    }
  }
);

module.exports = mongoose;
