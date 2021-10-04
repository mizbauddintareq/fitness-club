import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="container-fluid">
      {/*all service text */}
      <div className="my-5 text-center">
        <h1 className="text-uppercase fs-1 text-white">Our All Services</h1>
        <hr className="w-25 mx-auto bg-white" />
        <p>
          What you get from joining a fitness club compared to a regular gym
          obviously differs. But what are the major <br /> benefits and perks of
          signing up for a more well-rounded establishment?
        </p>
      </div>
      {/*all service card */}
      <Row xs={1} md={4} className="g-4">
        {allServices.map((service) => (
          <Col key={service.id} className="my-4">
            <Card
              className="h-100 shadow rounded"
              style={{ backgroundColor: "#14213d", color: "#adb5bd" }}
            >
              <Card.Img variant="top" src={service.thumb} />
              <Card.Body>
                <Card.Title className="text-white">{service.name}</Card.Title>
                <Card.Title className="text-white">
                  ${service.price} Per Month
                </Card.Title>
                <Card.Text>
                  {" "}
                  <p>
                    <small>{service.text}</small>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
