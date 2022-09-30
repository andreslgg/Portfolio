import {  Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../assets/img/home3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andreslgg/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
