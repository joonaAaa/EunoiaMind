import React from 'react';
import '../styles/sass/styles.scss';
import ModalNewEmotionComponent from './modal_agregarEmocion';
import { Link } from 'react-router-dom';


const Pregunta = () => {

  function seleccionar(emo) {
    let emo1 = document.getElementById("emo1")
    let emo2 = document.getElementById("emo2")
    let emo3 = document.getElementById("emo3")
    let emo4 = document.getElementById("emo4")
    let emo5 = document.getElementById("emo5")
    let emo6 = document.getElementById("emo6")
    let emoSelected = document.getElementById(emo)

    let emoArr = [emo1,emo2,emo3,emo4,emo5,emo6]
    for (let emo of emoArr){
      if(emo != null && emo !== undefined){
        emo.classList.remove("selected")
      }
    }
    if(emoSelected != null && emoSelected !== undefined){
      emoSelected.classList.add("selected")
    }
    console.log(emo);
  };

  return (
    <main class="pregunta">
      <h1 class="pregunta-titulo">¿Como te sientes hoy?</h1>
      
      <article class="pregunta-emociones">
      <section>
          <img src={require("../assets/felicidad.png")} onClick={() => seleccionar('emo1')} className="pregunta-emociones-img hvr-bounce-in" id='emo1' alt='' />
          <p className="pregunta-emociones-img-parrafo">Felicidad</p>
          </section>
          <section>
          <img src={require("../assets/miedo.png")} onClick={() => seleccionar('emo2')} className="pregunta-emociones-img hvr-bounce-in" id='emo2' alt='' />
          <p className="pregunta-emociones-img-parrafo">Miedo</p>  
          </section>
          <section>
          <img src={require("../assets/enojo.png")} onClick={() => seleccionar('emo3')} className="pregunta-emociones-img hvr-bounce-in" id='emo3' alt='' />
          <p className="pregunta-emociones-img-parrafo">Enojo</p>
          </section>
          <section>
          <img src={require("../assets/disgusto.png")} onClick={() => seleccionar('emo4')} className="pregunta-emociones-img hvr-bounce-in" id='emo4' alt='' />
          <p className="pregunta-emociones-img-parrafo">Disgusto</p>
          </section>
          <section>
          <img src={require("../assets/sorpresa.png")} onClick={() => seleccionar('emo5')} className="pregunta-emociones-img hvr-bounce-in" id='emo5' alt='' />
          <p className="pregunta-emociones-img-parrafo">Sorprendido</p>
          </section>
          <section>
          <img src={require("../assets/tristeza.png")} onClick={() => seleccionar('emo6')} className="pregunta-emociones-img hvr-bounce-in" id='emo6' alt='' />
          <p className="pregunta-emociones-img-parrafo">Tristeza</p>
          </section>
          </article>


          <div class="pregunta-logobtn">
        <img className="pregunta-logobtn-img" src={require("../assets/logo-manchita.png")} alt='' />
        <Link to={"/home"}><button type="button" className="pregunta-logobtn-btn botones-pantallas">Enviar</button></Link>
        <ModalNewEmotionComponent/>
        </div>
      </main>
  );

}

export default Pregunta;