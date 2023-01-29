import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const userTemple = [
  {
    nombreEmocion: '',
    descripcion: '',
    tipo: ''
  }
]

function ModalNewEmotionComponent({ createUser }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newEmotion, setNewEmotion] = useState(userTemple);
  const { nombreEmocion, descripcion, tipo} = newEmotion;

  const handleSubmit = (e) => {
    e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
    createUser(newEmotion);
  }

  const handleInputChange = (e) => {
    //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
    setNewEmotion({ ...newEmotion, [e.target.name]: e.target.value })//Aqui el event.target.name toma el name de cada input para añadirle datos
  }

    return (
        <>

        <div className="divbtn">
        <button class="divbtn-button  botones-pantallas" variant="success" onClick={handleShow}>Agregar emocion</button>
        </div>
            <Modal show={show} onHide={handleClose} >
            <Modal.Body className="form_new">
        <div className="form_new-emotion">
                    <form onSubmit={handleSubmit}>
                    <h2 className='form_new-emotion-titulo'>¡Genial, Nueva emocion!</h2>
                        <div className='form_new-emotion-container'>
                            <label for="nombreEmocion" className="form_new-emotion-container-nombre form_new-emotion-container-label">Nombre de la emocion:</label>
                            <input type='text' className='form_new-emotion-container-input' id='nombreEmocion' value={nombreEmocion} name='nombreEmocion' onChange={handleInputChange} />
                        </div>
                        <div className='form_new-emotion-container'>
                            <label for="tipo" className="form_new-emotion-container-tipo form_new-emotion-container-label">Tipo:</label>
                            <input type='text' className='form_new-emotion-container-input' id='tipo'  value={tipo} name='tipo' onChange={handleInputChange} />
                        </div>
                        <div className='form_new-emotion-container'>
                            <label for="descripcion" className="form_new-emotion-container-descripcion form_new-emotion-container-label" >Descripcion:</label>
                                <input type='text' className='form_new-emotion-container-input' id='descripcion' value={descripcion} name='descripcion' onChange={handleInputChange} />
                        </div>
                        <button type='submit' onClick={handleClose} className='botones-pantallas form_new-emotion-btn'>Agregar</button>
                    </form>
                </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalNewEmotionComponent;