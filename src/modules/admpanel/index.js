import React, { Component, useContext, useEffect, useState } from 'react';

// Methods
//import login from '../user/login/loginFunctions'
//import CardList from '../user/passport-cards/cardList';
//import PassportProfile from '../user/passportProfile'
// Local imports
import { AdmTablePoints } from '../components/admTablePoints';
// SCSS imports
import './admpanel.scss'
import '../../styles/main/home.scss';
import '../../styles/main/home-animations.scss';

const mcDataToSet = {
  name: '',
  mcname: '',
  phone: '',
  social: '',
  link: '',
  pts: 0,
}

const Panel = () => {
  const [mcData, setMcData] = useState(mcDataToSet)
  const [mcList, setMcList] = useState([])
  const [refresh, setRefresh] = useState()

  // Mount Component
  const loadMcList = async () =>{
    await fetch('/mclist')
    .then(res => res.json())
    .then(json => {setMcList(json), setRefresh(false)})
  }

  useEffect(() => {
    loadMcList();
    setRefresh(true)
  }, []);

  // API HANDLERS

  const handleFormChange = (e) => {
    const {name, value} = e.target
    mcDataToSet[name] = value
    setMcData(mcDataToSet)
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify(mcData)
      await fetch(`/mclist/newmc/${data}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then( res => res.json())
      .then( data => {
        if(data.status === "MC agregado"){
          setRefresh(true);
          loadMcList().then(()=>setRefresh(false))
        }
      })
    }

  const handleMcPut = async (elem, id, instance) =>{
    const mcRow = elem.parentNode.parentNode
    const mcInputs = elem.parentNode.parentNode.childNodes

    if(instance === 'edit'){
      mcRow.className = "mc-row enabled"  
      for(let i = 0; mcInputs.length > i; i++){
        mcInputs[i].disabled = false
        if(i === 2){
          mcInputs[i].focus()
        }
      }
    }else{
      mcRow.className = "mc-row disabled"
      for(let i = 0; mcInputs.length > i; i++){
        mcInputs[i].disabled = true
        if(!(i >= 3)){
          const {name, value} = mcInputs[i]
          mcDataToSet[name] = value
        }
      }
      const data = JSON.stringify(mcData)
      await fetch(`/mclist/editmc/${id}/${data}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then( res => res.json())
      .then( data => {
        if(data.status === "MC actualizado"){
          setRefresh(true);
          loadMcList().then(()=>setRefresh(false))
        }
      })
    }
    }

  const handleMcDelete = async (elem, mc) =>{
    if(prompt(`Para continuar escriba ${mc.mcname}`) === mc.mcname){
      setRefresh(true)
      await fetch(`/mclist/delete/${mc._id}`, {
        method: 'DELETE'
      }).then(res => res.json())
      .then(data =>{ loadMcList().then(()=>{setRefresh(false)})})
    }else{
      alert('El nombre que ingreso no coincide')
    }
    }

  const navigationSwitch = () =>{
      return (
          <div id="home" className="content-align">
            <h1 >PANEL</h1>
            <form id="mc-form" onSubmit={handleSubmit} >
              <label id="name-label" className="panel-form-label">Nombre</label>
              <input id="panel-form-input-0" name="name" type="text" className="panel-form-input" onChange={handleFormChange} />
              <br/>
              <label id="mcname" className="panel-form-label">McName</label>
              <input id="panel-form-input-1" name="mcname" type="text" className="panel-form-input" onChange={handleFormChange} />
              <br/>
              <label id="phone" className="panel-form-label">Telefono</label>
              <input id="panel-form-input-2" name="phone" type="text" className="panel-form-input" onChange={handleFormChange}/>
              <br/>
              <label id="social" className="panel-form-label">Red Social</label>
              <input id="panel-form-input-3" name="social" type="text" className="panel-form-input" onChange={handleFormChange}/>
              <br/>
              <label id="link" className="panel-form-label">Link</label>
              <input id="panel-form-input-4" name="link" type="text" className="panel-form-input" onChange={handleFormChange}/>
              <br/>
              <label id="pts" className="panel-form-label">Puntos</label>
              <input id="panel-form-input-5" name="pts" type="number" className="panel-form-input" onChange={handleFormChange}/>
              <br />
              <button type='submit'>Enviar</button>
            </form>
          </div>
      );
    }

  if(refresh === true){
    return (
      <div>
        <img
          id='loading-img-mcList'
          className='loading-img'
          src='https://res.cloudinary.com/versus/image/upload/v1585185745/Statics_images/xxpauscz8misoyrhkjis.gif'>
        </img>
      </div>
    )
  }else{
    return(
      <div id="render-div">
        <div id="panel-form" className="panel-card">
          {navigationSwitch()}
        </div>       
        <div id="table-panel" className="panel-card">
          {<AdmTablePoints mcList={mcList} handlePut={handleMcPut} handleDelete={handleMcDelete}/>}
        </div>
      </div>
    )
  }
}

export default Panel
