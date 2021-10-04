import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <div className="text-center my-5">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          accusamus veritatis quidem consequuntur in doloribus dolorem quam
          inventore, magni fuga natus vero expedita sit dolore dignissimos non
          deleniti eum, labore harum. Iure aut aliquam magni temporibus et
          laborum assumenda odio expedita quia accusantium alias cupiditate
          molestiae tempore, culpa sapiente quis.
        </p>
      </div>
      {/* service card */}
      <div className="container-fluid">
        <Row xs={1} md={4} className="g-4">
          {services.map((service) => (
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
    </div>
  );
};

export default Services;
