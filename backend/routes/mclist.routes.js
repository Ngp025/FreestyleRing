const express = require('express');
const mclist = express.Router();
const Mclist = require('../models/users/mclist');

// - - - - -  GET
mclist.get('/', async (req, res) =>{
  console.log("GET AQUI")
await Mclist.find({},{
   _id: true,
   mcname :true,
   link: true,
   social: true,
   pts: true
    }).then(data => res.json(data))
})

mclist.post('/newmc/:data', async (req, res) =>{
try{
  const { name, mcname, phone, link, social, pts } = JSON.parse(req.params.data)
  const newmc = new Mclist({name, mcname, phone, social, link, pts })
  if(!(newmc.mcname === '')){
    if(!(newmc.pts === '')){
      await newmc.save()
      res.json({status: 'MC agregado'})
    }else{
      res.json({status: 'No puede dejar los puntos vacios'})
    }
  }else{
    res.json({status: 'No puede dejar el nombre vacio'})
  }
}
catch(err){
  res.json(err)
}
})

mclist.put('/editmc/:id/:data', async (req, res)=>{
  console.log(req.params.id, req.params.data)
  try{
    const { name, mcname, phone, link, social, pts } = JSON.parse(req.params.data)
    await Mclist.findOneAndUpdate({_id: req.params.id},
       {$set: {
         mcname: mcname,
         social: social,
         pts: pts,
        }})
        res.json({status: 'MC actualizado'})
  }catch(err){

  }
})

mclist.delete('/delete/:id', async (req, res)=>{
  console.log(req.params.id," <-- id")
  try{
    await Mclist.deleteOne({_id : req.params.id})
    res.json({status: 'Mc eliminado'})
  }catch(err){

  }
})

/*
// Logout
users.get('/logout/:IDU', async (req, res) => {
  //COLOCAR UN CONTADOR DE USUARIOS ELIMINADOS CON IPS
  const { IDU } = req.params;
  console.log(IDU);
  await Connetion.deleteOne({ IDU: IDU });
});
users.get('/betalogin/:email/:password/', async (req, res) => {
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
// Inscripción
users.post('/betaregister/:email/1234', async (req, res) => {
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
      var newUserToSave = {
        name: req.body.nameR,
        mcName: req.body.mcName,
        email: req.body.emailR,
        document: req.body.documentR,
        address: req.body.direccionR,
        born: req.body.dateR,
        link: req.body.link,
        social: req.body.social || '-' ,
        tutorsName: req.body.nameTutorR || '-',
        tutorsDocument: req.body.documentTutorR || '-',
      };
      console.log(newUserToSave , "-- Usuario a guardar")
      await User.create(newUserToSave).then(
        res.json("congrats")
      ) 
    }
  } else {
    console.log('NO CUMPLE');
    return res.json({
      alert:
        'Disculpe, \n Su informacion de email no cumple los estandares de seguridad establecidos por la RFC.\n\n Intente nuevamente con otro email. ',
    });
  }
});
*/
module.exports = mclist;