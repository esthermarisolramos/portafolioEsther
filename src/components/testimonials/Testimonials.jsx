import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://github.com/esthermarisolramos/my-app.git',
      name: 'contador',
      role: 'Desarrollador Web . JavaScript | React | codigo de un contador .',
      test: 'Como desarrolladora y solucionadora de problemas, creo que Esther es una gran colaboradora. Conocí a Esther en algunos proyectos básicos de javascript y reacción y desde entonces ha progresado drásticamente en su comprensión del proceso de desarrollo. Siempre tiene un ambiente profesional y tiene buena calidad de audio y video lo que facilita la comunicación con ella.',
    },
    
  ];
  return (
    <section id="testmonials">
      <h2>Experiencia Laboral</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsGithub />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials