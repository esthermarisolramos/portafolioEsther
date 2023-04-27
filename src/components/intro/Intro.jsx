import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>Acerca de mi</h2>
      <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencias</h5>
              <small>1 año</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small> 5 Proyectos Realizados</small>
            </article>
          </div>
          <p>hola mi nombre es Esther Marisol Ramos Rivera, aun soy estudiante de la carrera de 
            INGENIERIA DE SISTEMAS de la universidad AUTONOMA TOMAS FRIAS  de la ciudad de Potosi,
            ya me encuentro cursando los ultimos semetres de la carrera, y eh estado trabajando con HTML, CSS, JavaScript, 
            creando todo, desde páginas de destino hasta API. Mi experiencia como desarrolladora de paginas me ha ayudado a conocer el amplio mundo 
            de la web y conocer varios desarroladores de todo el mundo. Además, trabajar con con compa;eros de la materia me ha ayudado a ser eficiente, 
            productiva y rápida incluso en un entorno muy estresante, lo cual es una habilidad importante en la industria de la tecnología.          
            </p>
            
        </div>
      </div>
    </section>
  )
}

export default Intro