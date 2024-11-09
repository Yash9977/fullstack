import React from "react";
import footer from "../assets/footer.svg";
import { Button, Col, Row } from "react-bootstrap";
import logo from '../assets/logo.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import Linkedin from '../assets/Linkedin.svg';

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          height: "51vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${footer})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            zIndex: 2,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <p className="footer">
            Learn more about our listing process, as well as our additional
            staging and design work
            <Button className="footer-btn">LEARN MORE</Button>
          </p>
        </div>
      </div>

      <div className="footer-2" style={{ padding: "20px", textAlign: "center" }}>
        <Row>
          <Col lg={6} xs={12} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"}}>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/">
              <p>Services</p>
            </a>
            <a href="/">
              <p>Projects</p>
            </a>
            <a href="/">
              <p>Testimonials</p>
            </a>
            <a href="/">
              <p>Contact</p>
            </a>
          </Col>
          <Col lg={6} className="subscribe" xs={12} >
            <p style={{marginTop:"20px"}}>Subscribe Us</p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter Email Address"
                style={{
                  flex: "1",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                }}
              />
              <button
                type="submit"
                style={{
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
      </div>

      <div className="footer-3" style={{ textAlign: "center", padding: "20px" }}>
        <p>2223</p>
        <img src={logo} alt="logo" />
        <div className="footer-icons" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram"  />
          <img src={Linkedin} alt="Linkedin"  />
        </div>
      </div>
    </>
  );
};

export default Footer;
