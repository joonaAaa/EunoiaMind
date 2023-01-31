import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

class Bienvenida extends Component {
  render() {
    return (
      <main className="bienvenida">
      <div>
          <h1 className="bienvenida-titulo">Bienvenid@ a EunoiaMind</h1>
      </div>
      <div>
          <img className="bienvenida-logo" src={require("../assets/logo-manchita.png")}/>
      </div>
      <div>
          <h2 className="bienvenida-subtitulo">Comencemos llenando algunos datos</h2>
      </div>   
      <div>
          <a href="/pregunta"><button type="button" className="botones-pantallas">Comenzar</button></a>
      </div>
  </main>
    );
  }
}
export default Bienvenida;