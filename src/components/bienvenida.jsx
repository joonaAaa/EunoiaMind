import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/styles.scss';

class Bienvenida extends Component {
  render() {
    return (
      <div className="contenedor-bienvenida">
      <section className="contenedor-titulo">
          <h1 className="titulo-bienvenida">Bienvenid@ a EunoiaMind</h1>
      </section>
      <section>
          <img className="logo-bienvenida" src={require("../assets/logo-manchita.png")}/>
      </section>
      <section className="contenedor-subtitulo">
          <h2 className="subtitulo-bienvenida">Comencemos llenando algunos datos</h2>
      </section>   
      <section className="contenedor-btn1_bienvenida">
          <a href="/pregunta"><button type="button" className="btn-bienvenida">Comenzar</button></a>
      </section>
  </div>
    );
  }
}
export default Bienvenida;