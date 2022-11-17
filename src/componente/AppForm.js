import {collection,doc,getDoc,addDoc,updateD} from "firebase/firestore";
import React  from 'react';
import { useState } from "react";
import firibase, {db} from './firebase';

const AppForm = (props) => {

  ////////REGISTRAR Y ACTUALIZAR////

  const camposRegistro = {nombre:"",edad:'',genero:''}
  const [objeto, setObjeto] = useState(camposRegistro);

  const handlesStatusChange = (e) => {
      const {name,value} = e.target;
      setObjeto({...objeto,[name]:value });
  }
  const handleSubmit = async (e) => {
      e.preventDefault();

      ///////////////REGISTRAR/////////////////////
      if(props.idActual===""){
          if(validarForm()){
             addDoc(collection(db, 'persona'), objeto);
             console.log('Se guardo....');
             
          }else{
              console.log('no se guardo...');
          }
      }else{
      }
      setObjeto(camposRegistro);
          
  };
///////////////////VALIDACION///////////////////////
  const validarForm = () => {
      if(objeto.nombre==="" || /^\s/.test(objeto.nombre)){
          alert("Escriba Nombre....");
          return false;

      }
      if(objeto.edad==="" || /^\s/.test(objeto.edad)){
        alert("Escriba Edad....");
        return false;

    }
    if(objeto.genero==="" || /^\s/.test(objeto.genero)){
        alert("Escriba Genero....");
        return false;

    }
    
      return true;

  };

/////////OBTENER REGISTRO POR idActual


//console.log(objeto);
  return (
    <div style={{background:"#f44336",height:"489px",width:"350px",boxShadow: "7px 13px 37px #5b5b5b", paddingTop:"7px"}}>
    <h3 style={{fontSize: "30px", color:"#eeeeee", marginBottom: "0px"}}>Registro</h3>
    <form onSubmit={handleSubmit} style={{ padding:"40px", fontFamily: "calibri"}}>
      <input style={{width:"100%", background:"#f44336", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #122e6d", fontFamily: "calibri", fontSize:"18px", color:"#5fa8ea"}} type="text" name='nombre' placeholder='Ingrese su Nombre' onChange={handlesStatusChange} value={objeto.nombre}/> <br />
      <input style={{width:"100%", background:"#f44336", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #122e6d", fontFamily: "calibri", fontSize:"18px", color:"#5fa8ea"}} type="int" name='edad' placeholder='Ingrese su Edad' onChange={handlesStatusChange} value={objeto.edad}/> <br />
      <input style={{width:"100%", background:"#f44336", padding:"10px", borderRadius:"4px", marginBottom:"20px", border: "2px solid #122e6d", fontFamily: "calibri", fontSize:"18px", color:"#5fa8ea"}} type="text" name='genero' placeholder='Ingrese su Genero' onChange={handlesStatusChange} value={objeto.genero}/> <br />
      <button style={{width:"100%", background:"#122e6d", border: "none",padding:"12px", color:"white", margin:"16px 15px", fontSize: "18px", fontFamily: "calibri"}}>
      {props.idActual === ""? "Guardar" : "Actualizar"}
      </button>
    </form>
    </div>
  )
}

export default AppForm;