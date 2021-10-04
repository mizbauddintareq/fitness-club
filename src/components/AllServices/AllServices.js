import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setAllServices(data.slice(0, 4)));
  }, []);
  return (
    <div className="container-fluid">
      <div className="my-5 text-center">
        <h1>Our All Services</h1>
      </div>
      <Row xs={1} md={4} className="g-4">
        {allServices.map((service) => (
          <Col className="my-4">
            <Card
              className="h-100 shadow  text-white rounded"
              style={{ backgroundColor: "#14213d" }}
            >
              <Card.Img variant="top" src={service.thumb} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Title>${service.price} Per Month</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
