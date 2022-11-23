import { addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react'
import {db} from "./firebase";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AppForm = (props) => {
    ///////////////////////////////////////////////////////////////////////
    ////////// CREAR - fnCrear - Guardar //////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    const camposRegistro = {nombre:"", edad:"", genero:""};
    const [objeto, setObjeto] = useState(camposRegistro);

    const handleStatusChange = (e) => {      //Manejar cambios en form
        const {name, value} = e.target;
        setObjeto({...objeto, [name]:value });
        console.log(objeto);
    };

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();

            if(props.idActual === ""){
                if(validarForm()){
                    addDoc(collection(db, 'persona'), objeto);
                    //console.log("Se guardo registro en BD...");
                    toast("Se GUARDO con exito...", {
                        type:'info',
                        autoClose: 2000
                    })
                }else{
                    console.log("NO se guardo...");
                }
            }else{
                await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
                //console.log("ACTUALIZAR REGISTRO...");
                toast("Se ACTUALIZO con exito...", {
                    type:'info',
                    autoClose: 2000
                })
                props.setIdActual("");
            }
            setObjeto(camposRegistro);
            
        } catch (error) {
            console.log("Error en crear o actualizar: ", error);
        } 
    };
    
    const validarForm = () => {
         if(objeto.nombre === ""){
            alert("Escriba nombre...");
            return false;
         }
         return true;
    };

    useEffect(() => {
      if(props.idActual === ""){
        setObjeto({...camposRegistro});
      }else{
        obtenerDatosPorId(props.idActual);
      }
    }, [props.idActual]);

    const obtenerDatosPorId = async(xId) => {
       const objPorId = doc(db, "persona", xId);
       const docPorId = await getDoc(objPorId);
       if (docPorId.exists()){
          setObjeto(docPorId.data());

       }else{
        console.log("No hay datos en BD...");
        
       }
    };

    ///////////////////////////////////////////////////////////////////////
    ////////// UPDATE - fnUpdate - Actualizar /////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    return (
        <div>
            <form className='card card-body' onSubmit={handleSubmit}>
                <button className='btn btn-primary btn-bock'>
                    Formulario (AppForm.js)
                </button>
                <div className='form-group input-group'>
                    <div className='input-group-text bd-light'>
                        <i className='material-icons'>group_add</i>
                    </div>
                    <input type="text" className="form-control" name="nombre" placeholder="Nombres..."
                        onChange={handleStatusChange} value={objeto.nombre}/>
                </div>
                <div className='form-group input-group clearfix'>
                    <div className='input-group-text bd-light'>
                        <i className='material-icons'>star_half</i>
                    </div>
                    <input type="text" className="form-control float-start" name="edad" placeholder="Edad..."
                        onChange={handleStatusChange} value={objeto.edad}/>
                </div>
                <div className='form-group input-group'>
                    <div className='input-group-text bd-light'>
                        <i className='material-icons'>insert_link</i>
                    </div>
                    <input type="text" className="form-control" name="genero" placeholder="Genero..."
                        onChange={handleStatusChange} value={objeto.genero}/>
                </div>
                <button className='btn btn-primary btn-block'>
                    {props.idActual === ""? "Guardar" : "Actualizar"}
                </button>
            </form>
        </div>
        /*<div style={{background:"orange", padding:"10px", margin:"10px"}}>
            <h3>CREAR / UPDATE</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='nombre' placeholder='Nombres...' 
                    onChange={handleStatusChange} value={objeto.nombre}
                />

                <input type="text" name='edad' placeholder='Edad...' 
                    onChange={handleStatusChange} value={objeto.edad}
                />

                <input type="text" name='genero' placeholder='Genero...' 
                    onChange={handleStatusChange} value={objeto.genero}
                />
                <button>
                    {props.idActual === "" ? "Guardar" : "Actualizar" }
                </button>
            </form>
            
        </div>*/
    )
}

export default AppForm
