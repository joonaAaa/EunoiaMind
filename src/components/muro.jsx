import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

const Muro = () => {
  return (
    <form action="" method="Get">
      <main className='muro'>
      <div className="muro-img">
        <img src={require("../assets/plant-hanging1.png")} alt="planta1" className="muro-img-planta" />
      </div>

      <div className="muro-title">
        ¿Quieres contarnos por qué?
      </div>
      
        <textarea className="muro-text" placeholder="Escribe aqui lo que quieras"></textarea>

        <div className="muro-img2"> 
          <img src={require("../assets/logo-manchita.png")} alt="manchamuro" className="muro-img2-mancha" />
        </div>
      
      <div className="muro-container">
        <Link to="/home"><button className="muro-container-btn botones-pantallas" type="button">Omitir</button></Link>
        <Link to="/home"><button className="muro-container-btn botones-pantallas" type="button">Guardar</button></Link>
      </div>
      </main>
    </form>
  );
};


export default Muro;