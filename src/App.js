import logo from './logo.svg';
import './App.css';
import AppForm from './componente/AppForm';
import { CONSTANTS } from '@firebase/util';
import { useState } from 'react';

function App() {
  /////////READ/////////////
  const [idActual, setIdActual] =useState('');  //controlar el estado Actualiza/Elimina
  const [docsBD, setDocsBD] =useState([]); 
  const [orden, setOrden] =useState(0);

  /////// LESTURA A BASE DE DATOS /////////////////
  const fnRead = () => {
    console.log("Lectura a base de datos");
  }

  ///////// ELIMINAR///////////////
  const fnDelete = () => {
    console.log("Eliminar un registro");
  }

  return (
    <div style={{background:"greenyellow" , width:"350px"}}>
      <h1>Sitio copia 2 (App.js) </h1>
      <AppForm {...{idActual, setIdActual, fnRead}}/>
    </div>
  );
}

export default App;
