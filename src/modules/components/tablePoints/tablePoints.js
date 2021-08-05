import React, { useState, useEffect } from 'react';
import "./style/tablePoints.scss"

export const TablePoints  = ({...props}) => {

    const [mcList, setMcList] = useState(props.mcList);
    const [rowSelected, setRowSelected] = useState(false)
    const [indexFocus, setIndexFocus] = useState()

    useEffect(() => {
        console.log(mcList, "<-- mcList")
        }, []);

    return(
        <div id="table-container" className="table-container">  
                <div id="mc-row-header" className="mc-row">
                    <div id="mc-name" className="mcname">Nombre</div>
                    <div id="mc-social" className="social">Red</div>
                    <div id="mc-pts" className="pts">Puntos</div>
                </div>
            {mcList.map((mc, index)=>{
                return(
                    <div id="mc-row" className="mc-row disabled" key={`mc-${index}`}>
                      <input disabled defaultValue={mc.mcname} id={`mc-name-${index}`} className="mcname" name="mcname"/>
                      <input disabled defaultValue={mc.social} id={`mc-social-${index}`} className="social" name="social"/>
                      <input disabled defaultValue={mc.pts} id={`mc-pts-${index}`} className="pts" name="pts"/>
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