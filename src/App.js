import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from './componente/firebase';


function App() {

  const [idActual, setIdActual]= useState('');
  const [docsBD, setDocsBD] =useState([]);
 

 <h1>HOLA</h1>
//////LECTURA A BASE DE DATOS/////////////////////////
  const fnRead = () => {
    console.log("Lectura a BD");
  }

  const fnDelet = () => {
    console.log("Eliminar un registro");
  }
  return (
    <center><div style={{background:"#fad1a8"}}>
      <AppForm{...{idActual,setIdActual,fnRead}}/>
      
    </div></center>
  );
}

export default App;
