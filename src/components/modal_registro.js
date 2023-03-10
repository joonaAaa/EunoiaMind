import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const userTemple = [
  {
    nombreUsuario: '',
    correo: '',
    contraseña: '',
    contraseña2: ''
  }
]

function ModalFormComponent({ createUser }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newUser, setNewUser] = useState(userTemple);
  const { nombreUsuario, correo, contraseña, contraseña2 } = newUser;

  const handleSubmit = (e) => {
    e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
    createUser(newUser);
  }

  const handleInputChange = (e) => {
    //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
    setNewUser({ ...newUser, [e.target.name]: e.target.value })//Aqui el event.target.name toma el name de cada input para añadirle datos
  }

    return (
        <>
        <div className="btnRegistro" onClick={handleShow}>
            <Button><i class="bi bi-plus-lg" variant="success" onClick={handleShow}>Registrarse</i></Button>
        </div>
            <Modal show={show} onHide={handleClose} >
            <Modal.Body className="form__registro">
        <div className="form__registro-container">
                    <form onSubmit={handleSubmit}>
                        
                    <h2 className='form__registro-container-titulo'>CREA TU CUENTA</h2>
                        <div className='form__registro-container-div'>
                            <label for="nombre" className="form__registro-container-div-text">Nombre de usuario:</label>
                            <input type='text' className='form__registro-container-div-input' id='nombre' value={nombreUsuario} name='nombreUsuario' onChange={handleInputChange} />
                        </div>
                        <div className='form__registro-container-div'>
                            <label for="correo" className="form__registro-container-div-text">Correo:</label>
                            <input type='text' className='form__registro-container-div-input' id='correo'  value={correo} name='correo' onChange={handleInputChange} />
                        </div>
                        <div className='form__registro-container-div'>
                            <label for="contraseña" className="form__registro-container-div-text" >Contraseña:</label>
                                <input type='password' className='form__registro-container-div-input' id='contraseña' value={contraseña} name='contraseña' onChange={handleInputChange} />
                        </div>
                        <div className='form__registro-container-div'>
                            <label for="contraseña2" className="form__registro-container-div-text">Confirme contraseña:</label>
                                <input type='password' className='form__registro-container-div-input' id='contraseña2' value={contraseña2} name='contraseña2' onChange={handleInputChange} />
                        </div>
                        <button type='submit' onClick={handleClose} className='botones-pantallas form__registro-container-btn'>Aceptar</button>
                    
                    </form>
                </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalFormComponent;