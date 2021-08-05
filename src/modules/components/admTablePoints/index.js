import React, { useState, useEffect } from 'react';
import "./style/admTablePoints.scss"

export const AdmTablePoints  = ({...props}) => {

    const [mcList, setMcList] = useState(props.mcList);
    const [rowSelected, setRowSelected] = useState(false)
    const [indexFocus, setIndexFocus] = useState()

    useEffect(() => {
        console.log(mcList, "<-- mcList")
        }, []);

    return(
        <div id="table-container" className="table-container">  
                <div id="mc-row-header" className="mc-row">
                    <div id="mc-name" className="mcname">Total de MC {mcList.length}</div>
                </div>
            {mcList.map((mc, index)=>{
                return(
                    <div id="mc-row" className="mc-row disabled" key={`mc-${index}`}>
                      <label id={`mc-name-label-${index}`} className="name-label">Nombre</label>
                      <input disabled defaultValue={mc.name} id={`mc-name-${index}`} className="name" name="name"/>
                      <label id={`mc-mcname-label-${index}`} className="mcname-label">MC Nick</label>     
                      <input disabled defaultValue={mc.mcname} id={`mc-mcname-${index}`} className="mcname" name="mcname"/>
                      <label id={`mc-phone-label-${index}`} className="phone-label">Telefono</label>
                      <input disabled defaultValue={mc.phone} id={`mc-phone-${index}`} className="phone" name="phone" type="number"/>
                      <label id={`mc-social-label-${index}`} className="social-label">Red social</label>
                      <input disabled defaultValue={mc.social} id={`mc-social-${index}`} className="social" name="social"/>
                      <label id={`mc-link-label-${index}`} className="link-label">Link</label>
                      <input disabled defaultValue={mc.link} id={`mc-link-${index}`} className="link" name="link"/>
                      <label id={`mc-pts-label-${index}`} className="pts-label">Puntos</label>
                      <input disabled defaultValue={mc.pts} id={`mc-pts-${index}`} className="pts" name="pts" type="number"/>
                      <div id="mc-control" className="mc-controls"> 
                          <button 
                            id={`edit-${index}`}
                            onClick={(e)=> {;
                              setRowSelected(true)
                              if(!(rowSelected)){
                                props.handlePut(e.target, mc._id, "edit");
                                setIndexFocus(index);
                                document.getElementById(`save-edit-${index}`).style.display = "inline-block";
                                document.getElementById(`delete-${index}`).style.display = "none";
                                document.getElementById(`edit-${index}`).style.display = "none";
                              }else{
                                  alert('Guarde la edición para continuar');
                                  document.getElementById(`mc-pts-${indexFocus}`).focus()
                              }
                              }}>Edit</button>
                          <button 
                            id={`save-edit-${index}`}
                            style={{display: 'none'}}
                            onClick={(e)=>{
                                props.handlePut(e.target, mc._id, "save");
                                setRowSelected(false)
                                document.getElementById(`save-edit-${index}`).style.display = "none"
                                document.getElementById(`delete-${index}`).style.display = "inline-block"
                                document.getElementById(`edit-${index}`).style.display = "inline-block"
                                }}>Save</button>
                          <button id={`delete-${index}`} onClick={(e)=>props.handleDelete(e.target, mc)}>Delete</button>
                        </div>
                    </div>
                    )
                })}
        </div>
    )
}