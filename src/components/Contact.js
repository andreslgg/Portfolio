import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import emailjs from "emailjs-com"

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {


  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState('Enviar');

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    emailjs.sendForm('service_l14yq36', 'template_i48zf1w', e.target, 'FgmOU84mdzrjp82Uo')
      .then((result) => {
        console.log(result.text);
        setStatus({ succes: true, message: 'El mensaje se entrego correctamente.' });
      }, (error) => {
        console.log(error.text);
        setStatus({ succes: false, message: 'Algo salio mal, intentalo mas tarde.' });
      });
    e.target.reset();
    setButtonText("Enviar");
  };




  return (
    <section className="contact" id="contact">
      <Container className="align-items-center">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Contactame</h2>
              <form onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Nombres" name="firstName" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Apellidos" name="lastName" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email" name="email" required />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Numero de telefono" name="phone" required />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Mensaje" name="message" required></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </div>}
        </TrackVisibility>

      </Container>
    </section>
  )
}
