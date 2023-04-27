import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h5>
        Recibo sus mensajes y responderé lo antes posible si el correo electrónico válido es
        proporcionó :)
      </h5>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Correco Electonico</h4>
            <h5>123321Esther@gmail.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Enviar Mensaje</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Ingrese su correo"
            name="user_email"
            required
          />
          <textarea
            placeholder="Ingrese su mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Mensaje Enviado
          </button>
          {message && <span>Gracias, responderé lo antes posible.:)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
