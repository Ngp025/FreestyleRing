import React, { Component, useContext, useState } from 'react';

// Methods
//import login from '../user/login/loginFunctions'
//import CardList from '../user/passport-cards/cardList';
//import PassportProfile from '../user/passportProfile'
// Local imports
// SCSS imports
import '../../styles/main/home.scss';
import '../../styles/main/home-animations.scss';

var allNavArray = []
var navigationArray = [];
var navigationIndex = []
// Local Declarations

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "home",
      navBar: "expanded",
      personalize : {
        mcList: [],
        mainColor : {
          red: 155,
          green: 155,
          blue: 155,
        },
      },
      userInfo:{}
    };
    Home.prototype.navigationHandler = Home.prototype.navigationHandler.bind(this);
    Home.prototype.userInfoSetter = Home.prototype.userInfoSetter.bind(this);
  }
  // LOGUIN FUNCTIONS STATE
  loginState(invoked, resInvoke) {
    switch (invoked) {
      case 'register':
        document.getElementById('register-box').style.display = 'block';
        document.getElementById('validation-box').style.display = 'none';
        document.getElementById('updating-box').style.display = 'none';
        document.getElementById('congrats-box').style.display = 'none';
        break;
      case 'validation':
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('validation-box').style.display = 'block';
        document.getElementById('updating-box').style.display = 'none';
        document.getElementById('congrats-box').style.display = 'none';
        document.getElementById('recovery-box').style.display = 'none';
        break;
      case 'updating':
        window.scrollTo(0, 0)
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('validation-box').style.display = 'none';
        document.getElementById('updating-box').style.display = 'block';
        document.getElementById('congrats-box').style.display = 'none';
        document.getElementById('recovery-box').style.display = 'none';
        break;
      case 'congrats':
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('validation-box').style.display = 'none';
        document.getElementById('updating-box').style.display = 'none';
        document.getElementById('recovery-box').style.display = 'none';
        document.getElementById('congrats-box').style.display = 'block';
        setTimeout( ()=> location.reload(), 2000)
        break;
      case 'recovery':
        //document.getElementById('login-box').style.display = 'none';
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('validation-box').style.display = 'none';
        document.getElementById('updating-box').style.display = 'none';
        document.getElementById('congrats-box').style.display = 'none';
        document.getElementById('recovery-box').style.display = 'block';
        break;
    }
  }
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
  loginButtonDisplay() {
    if (localStorage.name) {
      return (
        <button
          id='profile-button'
          className='modal-trigger tooltipped  login-button highGradeButton'
          data-tooltip='Mira tu perfil'
          onClick={() => (location.href = '/#/settings')}>
          Perfil
        </button>
      );
    } else {
      return (
        <button
          id='login-button'
          className='modal-trigger tooltipped  login-button highGradeButton'
          data-tooltip='Mira tu perfil'
          onClick={() => this.openLogin()}>
          Inicia sesión
        </button>
      );
    }
  }
  openLogin(){
  }
  async locallogin() {
    var emailL = document.getElementById('email-local-input').value;
    var passwordL = document.getElementById('password-local-input').value;    // LOCAL FUNCTION
    //Form Vars
    if (emailL && passwordL) {
      await fetch(`users/betalogin/${emailL}/${passwordL}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.alert) {
            alert(json.alert);
          } else {
            Home.prototype.loginState('congrats');
            setTimeout(()=>{
              Home.prototype.navigationHandler("land");
              Home.prototype.userInfoSetter(json)
            }, 1600)
          }
        });
    } else {
      alert('Complete su informacion para realizar el login');
    }
  }
  // Register Handler
  localRegister() {
    var nameR = document.getElementById('name-register-input').value;
    var mcName = document.getElementById('name-mc-input').value;
    var emailR = document.getElementById('email-register-input').value.trim().toLowerCase();
    var dateR = document.getElementById('date-register-input').value;
    var nameTutorR = document.getElementById('name-tutor-register-input').value;
    var documentTutorR = document.getElementById('document-tutor-input').value;
    var documentR = document.getElementById('document-input').value;
    var direccionR = document.getElementById('city-register-input').value;
    var link = document.getElementById('link-input').value;
    var social = document.getElementById('social-input').value;
    async function saveRegister() {
      console.log('pasando por registered click');
        Home.prototype.loginState('updating');
        var preventLoginError = setTimeout(()=>{alert("Disculpe hubo un problema en su inscripción, por favor intente mas tarde"); location.reload()}, 22000);
        await fetch(`users/betaregister/${emailR}`, {
          method: 'POST',
          body: JSON.stringify({
            nameR,
            mcName,
            emailR,
            link,
            social,
            documentR,
            direccionR,
            dateR,
            nameTutorR,
            documentTutorR,
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((json) => {
            clearTimeout(preventLoginError)
           if (json.alert) {
             function existingMail(){
              Home.prototype.loginState('register', true);
              setTimeout(()=>alert(json.alert), 250)
             }
             existingMail()
            } else {
              setTimeout(()=> Home.prototype.loginState('congrats', true), 2000);
            }
          });
        //.then( location.reload())
    }
    if (
      nameR &&
      emailR &&
      dateR &&
      link &&
      mcName &&
      documentR &&
      direccionR
    ) {
      saveRegister();
    } else {
      alert('Complete el formulario para avanzar');
      //console.log(`Complete the info`);
    }
  }
  // Validation Handler
  async localValidation(preTournamentInfo) {
    console.log(preTournamentInfo, '<-------------');
    AmbaMetropolitanos.prototype.loginState('updating');
    var toValidate = document.getElementById('validation-token-input').value;
    if (toValidate === '') {
      alert('Ingrese su Codigo');
    }
    await fetch(`users/confirm/${toValidate}`)
      .then((res) => res.json())
      .then(async (json) => {
      });
  }
  // Navigation Handler
  navBarHandler(){
    if(this.state.navBar === "colapsed"){
      this.setState({navBar : "expanded"})
    }else{
      this.setState({navBar : "colapsed"})
    }
  }
  navigationHandler(newNav, invoke){
    if(invoke){
      function eliminar(array, elemento) {
        var resultado = []
        for (var i = 0; i < array.length; i++) {
          if (i !== elemento) {
            resultado.push(array[i]);
          }
        }
        return resultado;
      }
      navigationIndex.pop()
      navigationIndex.push(navigationArray.length-1);
      var newNavArray = eliminar(navigationArray, navigationIndex[0]);
      navigationArray = newNavArray
      console.log(navigationArray)
      newNav === "land" ? this.navBarHandler() : ""
      this.setState({
        navigation : newNav
      })
    }else{
      navigationArray.push(this.state.navigation)
      this.setState({
        navigation : newNav
      })
    }
  }
  // User info setter
  userInfoSetter(data){
    this.setState({
      userInfo : data
    })
  }

  // Mount Component
  componentDidMount() {
    this.loadMcList()
  }
  componentWillUnmount() {
  }

  async loadMcList(){
    await fetch('users/mclist/')
      .then((res) =>{res.json()})
      .then((json) => this.setState({mcList : json}))
  }

  navigationSwitch(){
    switch(this.state.navigation){
      case "home":
        return (
            <div id="home" className="content-align">
              <div id="help-content" className="help-content">
                <label id="help-label" className="help-label">Click para comenzar</label>
              </div>
              <img 
                  src="https://res.cloudinary.com/drgv8takd/image/upload/v1602526434/Mision%20Hip%20Hop/Logos/MISION_HH_-_MIEL_3_pdmxor.png"
                  id="main-logo" 
                  className="main-logo animatedO opacity" 
                  onClick={()=>{
                    this.navigationHandler("land");
                  }}/>
              <h4 id="main-subtitle" className="main-subtitle opacityMainSubTitle animatedMainSubTitle">COMPETENCIAS DE FREESTYLE ONLINE</h4>
            </div>
        );
        break
      case "user-login" :
        return (
          <div
            id='user-login'
            className="login-content opacity animatedO">
          {/*login.loginBeta(
            Home.prototype.loginState,
            Home.prototype.locallogin,
          )*/}            
          <label 
            id='land-title'
            className='text-title'
            >
              INSCRIPCIÓN
            </label>
          {login.registerBeta(Home.prototype.localRegister)}
          {login.recovery(Home.prototype.loginState)}
          {login.validationModal(Home.prototype.localValidation)}
          {login.updating()}
          {login.congrats()}
        </div>
      )
      case "pre-enroll" : 
        return(
          <div id="pre-enroll" className="pre-enroll-content animatedO opacity">
          <label 
            id='land-title'
            className='text-title'
            >
              INFORMACIÓN
            </label>
            <div id="pre-enroll-data" className="pre-enroll-data-box">
            <div id="main-content" className="main-content">
              <label id="enroll-faq-1" className='text-subTitle'>¿Cómo participar?</label>
              <p id="enroll-p-1" className="enroll-p-1">Los ultimos tres domingos del mes podras inscribirte en la plaza vicuña makena (Ramallo y Avenida Crámer - Saavedra), a partir de las 16hs </p>
             </div> 
              <div id="footer-content" className="footer-content">
                <label id="footer-title" className='text-subTitle'>MÁS INFORMACIÓN</label>
                <button id="continue" className="continue" onClick={()=>window.open("https://docs.google.com/document/d/1XVW1Iia837yXvfNcjmr__hfgIHaQaHvqq6G_rGSaoe8/edit?usp=sharing")}>REGLAMENTO GENERAL</button>
                <button id="continue" className="continue" onClick={()=>window.open("https://discord.gg/AqSENSZ")}>NUESTRO DISCORD</button>
                <button id="continue" className="continue" onClick={()=>window.open("https://docs.google.com/document/d/1VgcVfo1MAXmmvu7HO3L6Kxs6Dk8cQXimnyWwbCGQavA/edit?usp=sharing")}>F. RETADORES</button>
                <button id="continue" className="continue" onClick={()=>window.open("https://docs.google.com/document/d/1SJ9NaEW6OknLOD8uOTR-wOrZMP4NGCzQ46XvJtBXEgY/edit?usp=sharing")}>F. PESOS PESADOS</button>
              </div>
            </div>
          </div>
        )
      case "land" : 
      return(
        <div id="land" className="land-content opacityLand-content animatedLand-content">
          <label 
            id='land-title'
            className='text-title'
            >
              INICIO
            </label>
            <div id="land-data" className="land-data-box animatedO opacity">
              <label id="enroll-help" className="enroll-help">Completa el formulario para enviar tu presentación</label>
              <button id="enroll" className="enroll " onClick={()=>{this.navigationHandler("pre-enroll"); setTimeout(()=>this.setState({navBar : "colapsed"}), 500)}}>INFORMACIÓN</button>
              <label id="mcList-help" className="mcList-help">Revisa un listado con los MCs sus videos de presentación y sus redes</label>
              <button id="mc-list" className="mc-list " onClick={()=>{this.navigationHandler("mcList"); setTimeout(()=>this.setState({navBar : "colapsed"}), 500)}}>TABLA DE PUNTOS</button>
            </div>
        </div>
      )
      case "mcList" : 
      return(
        <div id="mcList-content" className="mcList-content animatedO opacity">
          <label 
            id='land-title'
            className='text-title'
            >COMPETIDORES</label>
          <div id="mcList-filter" className="mcList-filter"></div>
          <div id="mcList-box" className="mcList-box">
            {this.state.mcList ? this.state.mcList.map((mc, index)=>{
              return( 
              <div id={`mc-${index}`} key={`${index}`} className="mc-card">
                <div id={`card-header-${index}`} className="card-header" key={`header-${index}`}>
                  {/*<label id={`mc-index-${index}`} key={`index-${index}`} className="mc-index">{`${index} - `}</label> */}
                  <div id={`user-data-box-${index}`} className="user-data-box" key={`data-box-${index}`}>
                  <label id={`mc-name-label-${index}`} key={`name-label-${index}`} className="mc-name-label">
                    {mc.mcName}
                    </label>
                    </div>
                  </div>
                <div id={`card-footer-${index}`} className="card-footer" key={`footer-${index}`}>
                <div id={`user-footer-box-${index}`} className="user-footer-box" key={`footer-box-${index}`}>
                  <img 
                    id={`mc-link-${index}`}
                    key={`link-${index}`}
                    className="mc-link"
                    src="https://res.cloudinary.com/drgv8takd/image/upload/v1603233871/Mision%20Hip%20Hop/Assets/Mc%20List%20assets/white-play-icon-png-7_ewh2q2.png"
                    onClick={()=>window.open(`${mc.link}`)}/>
                    <div id={`mc-space-${index}`} key={`space-${index}`} className="mc-space"></div>
                  <img 
                    id={`mc-social-${index}`}
                    key={`social-${index}`}
                    className="mc-social"
                    src="https://res.cloudinary.com/drgv8takd/image/upload/v1603233868/Mision%20Hip%20Hop/Assets/Mc%20List%20assets/kisspng-computer-icons-legends-of-atlantis-logo-white-logo-instagram-branco-5b3efe6e399e60.487511851530855022236_b2n6el.png"
                    onClick={()=>window.open(`${mc.social}`)}/>
                </div>
                </div>
              </div>)
              }) : <img
                     id='loading-img-mcList'
                     className='loading-img'
                     src='https://res.cloudinary.com/versus/image/upload/v1585185745/Statics_images/xxpauscz8misoyrhkjis.gif'></img>}
          </div>
          <div id="mcList-selected" className="mcList-box-selected"></div>
          <div id="mcList-div" className="mcList-div"></div>
          <button id="enroll-mcList" className="enroll" onClick={()=>{this.navigationHandler("pre-enroll")}}>INSCRIBIRSE</button>
       </div>
      )
    }
  }
  
  navReturnHandler(){
    navigationIndex.pop()
    navigationIndex.push(navigationArray.length -1)
    if(navigationIndex[0] === 0){}else{this.navigationHandler(navigationArray[navigationIndex[0]], true)}
  }

  render() {
    return(
      <div id="render-div">
        <div id="header" className="header" style={{display:`${this.state.navigation === "home" ? "none" : "block"}`}}>
          <div id="navigation-bar" className="navigation-bar">
            <img id="return-button" className="return-button" style={{display: `${this.state.navBar === "expanded" ? "none" : "block"}`}} onClick={()=>this.navReturnHandler()} src="https://res.cloudinary.com/drgv8takd/image/upload/a_270/v1603087706/Mision%20Hip%20Hop/Assets/Nav%20assets/25366_m3kjuv.svg"/>
            <img id="title-img-nav" className={`${this.state.navBar}`} src="https://res.cloudinary.com/drgv8takd/image/upload/v1602536269/Mision%20Hip%20Hop/Logos/MISION_HH_-_logo_-_white_znaiz4.png" />
          </div>
          {/*<img id="title-img" className="title-img" src="https://res.cloudinary.com/drgv8takd/image/upload/v1602536269/Mision%20Hip%20Hop/Logos/MISION_HH_-_logo_-_white_znaiz4.png" /> */}
        </div>        
        {this.navigationSwitch()}
      </div>
    )
  }
}

export default Home;
