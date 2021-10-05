import React from "react";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import slider1 from "../../images/slider-1.jpg";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";

const Header = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar
          variant="dark"
          expand="lg"
          style={{ backgroundColor: "#000000" }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <div className="logo">
                <h3>FITNESS CLUB</h3>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/member">
                  Membership
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* carousel */}
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="First slide" />
            <Carousel.Caption>
              <h3>PERSONAL TRAINER</h3>
              <p>
                Our Personal Trainers will keep you both inspired and in shape.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider2} alt="Second slide" />

            <Carousel.Caption>
              <h3>GROUP CLASSES</h3>
              <p>
                Our Innovation Center creates cutting-edge classes that are
                exclusive to Holmes Place.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="Third slide" />

            <Carousel.Caption>
              <h3>NUTRITION</h3>
              <p>Eating well nourishes the body and delights the senses</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
