const express = require('express');
const users = express.Router();
const Connetion = require('../models/users/usersConnection');
const User = require('../models/users/users');
const bcrypt = require('bcryptjs');

// Editando Perfil
users.put('/editProfile/:IDU', async (req, res) => {
  console.log(req.body, 'edit profile');

  await User.findByIdAndUpdate(
    { _id: req.params.IDU },
    {
      $set: {
        name: req.body.name,
        document: req.body.document,
        //'email': req.body.email,
        born: req.body.born,
        address: req.body.address,
        phone: req.body.phone,
        tutorsName: req.body.tutorsName,
        tutorsDocument: req.body.tutorsDocument,
      },
    },
    { returnNewDocument: true, new: true },
    (err, doc) => {
      if (err) {
        console.log('Something wrong when change info!');
        res.json({
          alert: 'Error la edificion de perfil no pudo ser completada',
        });
      } else {
        const UDT = {
          name: doc.name,
          document: doc.document,
          born: doc.born,
          // email: doc.email,
          address: doc.address,
          phone: doc.phone,
          tutorsName: doc.tutorsName,
          tutorsDocument: doc.tutorsDocument,
        };
        console.log(UDT);
        res.json(UDT);
      }
    }
  );
});

// - - - - -  GET
//visualizando favoritos (sin pulir )
users.get('/logout/:IDU', async (req, res) => {
  //COLOCAR UN CONTADOR DE USUARIOS ELIMINADOS CON IPS
  const { IDU } = req.params;
  console.log(IDU);
  await Connetion.deleteOne({ IDU: IDU });
});
users.get('/betalogin/:email/:password', async (req, res) => {
  if (!req.params.email || !req.params.password) {
    console.log('ERROR');
    res
      .status(200)
      .json('ERROR por modificacion de front posiblemente mal intencionada.');
  } else {
    var string = req.params.email;
    var regex = new RegExp(["^", string, "$"].join(""), "i");
    await User.findOne(
      { email: regex },
      {
        _id: 1,
        name: 1,
        email: 1,
        email_verified: 1,
        picture: 1,
        provider: 1,
        language: 1,
        passportID: 1,
        password: 1,
      }
    ).then((user) => {
      if (user) {
        //Match password
        bcrypt.compare(req.params.password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            if (user.email_verified === true) {
              const send = {
                _id: user._id,
                name: user.name,
                email: user.email,
                email_verified: user.email_verified,
                picture: user.picture,
                provider: user.provider,
                language: user.language,
                passportID: user.passportID,
              };
              console.log(send);
              return res.json({
                send: send,
                name: user.name,
                picture: user.picture,
                provider: `null`,
                language: user.language,
              });
            } else {
              return res.json({
                alert:
                  'Por favor revise su correo, y verifique su cuenta. \n\n Recuerde que el mensaje podria estar en la bandeja de spam, \n dependiendo de su configuracion. ',
              });
            }
          } else {
            //contraseña incorrecta
            return res.json({
              alert:
                'Disculpe, \n Su contraseña no coincide, intente nuevamente.',
            });
          }
        });
      } else {
        return res.json({
          alert: `Disculpe, \n Esta cuenta no se encuentra registrada.`,
        });
      }
    });
  }
});

// - - - - -  POST
users.post('/betaregister/:email/:emailVerify', async (req, res) => {
  var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var verify = "true" //req.params.emailVerify
  if (regex.test(req.params.email) === true) {
    if (
      (await User.find({ email: req.params.email }).countDocuments()) > 0 ===
      true
    ) {
      console.log('Disculpe este email ya se encuentra registrado');
      res.json({
        alert: 'Disculpe, \n Este email ya se encuentra registrado.',
      });
    } else {
      console.log("Aqui en este else en user.routes")
    }
  } else {
    console.log('NO CUMPLE');
    return res.json({
      alert:
        'Disculpe, \n Su informacion de email no cumple los estandares de seguridad establecidos por la RFC.\n\n Intente nuevamente con otro email. ',
    });
  }
});

module.exports = users;