import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const userTemple = [
    {
        correo: '',
        contraseña: '',
    }
]

function ModalIngresoComponent({ findUser }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [User, setNewUser] = useState(userTemple);
    const { correo, contraseña} = User;

    const handleSubmit = (e) => {
        e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
        findUser(User);
    }

    const handleInputChange = (e) => {
        //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
        setNewUser({ ...User, [e.target.name]: e.target.value })//Aqui el event.target.name toma el name de cada input para añadirle datos
    }


    return (
        <>
        <div className="btnRegistro" onClick={handleShow}>
            <Button><i class="bi bi-plus-lg" variant="success" onClick={handleShow}>Ingresar</i></Button>
</div>
            <Modal show={show} onHide={handleClose} >
            <Modal.Body className="form_ingresar">
        <div className="form_ingresar-container">
                    <form onSubmit={handleSubmit}>
                    <h2 className='form_ingresar-container-titulo'>ACCEDE CON TUS DATOS</h2>
                        <div className='form_ingresar-container-div'>
                            <label for="correo" className="form_ingresar-container-div-text">Correo:</label>
                            <input type='text' className='form_ingresar-container-div-input' id='correo'  value={correo} name='correo' onChange={handleInputChange} />
                        </div>
                        <br />
                        <div className='form_ingresar-container-div'>
                            <label for="contraseña" className="form_ingresar-container-div-text" >Contraseña:</label>
                                <input type='password' className='form_ingresar-container-div-input' id='contraseña' value={contraseña} name='contraseña' onChange={handleInputChange} />
                        </div>
                        <Link to={"/bienvenida"}><button type="button" className="botones-pantallas form_ingresar-container-btn">Aceptar</button></Link>
                    </form>
                </div>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalIngresoComponent;


