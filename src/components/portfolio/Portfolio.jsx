import React from 'react';
import IMG1 from '../../assets/bookstore.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bookstore',
      img: IMG1,
      description:
        'Contador para aumentar o dismiur numeros',
      technologies: 'React ',
      link: 'https://github.com/esthermarisolramos/my-app.git',
      
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>Mis trabajos Recientes</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
