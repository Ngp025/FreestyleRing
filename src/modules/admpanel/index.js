import React, { Component, useContext, useState } from 'react';

// Methods
//import login from '../user/login/loginFunctions'
//import CardList from '../user/passport-cards/cardList';
//import PassportProfile from '../user/passportProfile'
// Local imports
// SCSS imports
import '../../styles/main/home.scss';
import '../../styles/main/home-animations.scss';

// Logim
var allNavArray = []
var navigationArray = [];
var navigationIndex = []
// Local Declarations

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mcname: '',
      phone: '',
      social: '',
      link: '',
      pts: 0,
    };
    Panel.prototype.handleFormChange = Panel.prototype.handleFormChange.bind(this);
    Panel.prototype.handleSubmit = Panel.prototype.handleSubmit.bind(this);
  }
  // Mount Component
  componentDidMount() {
    this.loadMcList()
  }
  componentWillUnmount() {
  }

  async loadMcList(){
   // await fetch('users/mclist/')
    //.then((res) =>{ console.log(res.json(), "<-.-") /*res.json()*/})
      //.then((json) => this.setState({mcList : json}))
  }

  handleFormChange(e){
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

 async handleSubmit(e) {
  e.preventDefault()
  const data = JSON.stringify(this.state)
    await fetch(`/mclist/newmc/${data}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then( res => res.json())
    .then( data => {
      console.log(data)
      if(data.status === "MC agregado"){
        location.reload()
      }
    })
  }

  navigationSwitch(){
      return (
          <div id="home" className="content-align">
            <h1 >PANEL</h1>
            <form id="mc-form" onSubmit={this.handleSubmit} >
              <label id="name-label" className="panel-form-label">Nombre</label>
              <input id="panel-form-input-0" name="name" type="text" defaultValue={this.state.name} className="panel-form-input" onChange={this.handleFormChange} />
              <br/>
              <label id="mcname" className="panel-form-label">McName</label>
              <input id="panel-form-input-1" name="mcname" type="text" defaultValue={this.state.mcname} className="panel-form-input" onChange={this.handleFormChange} />
              <br/>
              <label id="phone" className="panel-form-label">Telefono</label>
              <input id="panel-form-input-2" name="phone" type="text" defaultValue={this.state.phone} className="panel-form-input" onChange={this.handleFormChange}/>
              <br/>
              <label id="social" className="panel-form-label">Red Social</label>
              <input id="panel-form-input-3" name="social" type="text" defaultValue={this.state.social} className="panel-form-input" onChange={this.handleFormChange}/>
              <br/>
              <label id="link" className="panel-form-label">Link</label>
              <input id="panel-form-input-4" name="link" type="text" defaultValue={this.state.link} className="panel-form-input" onChange={this.handleFormChange}/>
              <br/>
              <label id="pts" className="panel-form-label">Puntos</label>
              <input id="panel-form-input-5" name="pts" type="number" defaultValue={this.state.pts} className="panel-form-input" onChange={this.handleFormChange}/>
              <button type='submit'>Enviar</button>
            </form>
          </div>
      );
    }
  
  navReturnHandler(){
    navigationIndex.pop()
    navigationIndex.push(navigationArray.length -1)
    if(navigationIndex[0] === 0){}else{this.navigationHandler(navigationArray[navigationIndex[0]], true)}
  }

  render() {
    return(
      <div id="render-div">       
        {this.navigationSwitch()}
      </div>
    )
  }
}

export default Panel;
