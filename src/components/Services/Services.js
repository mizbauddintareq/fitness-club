import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);
  return (
    <div>
      {/* services text */}
      <div
        className=" container-fluid text-center"
        style={{ marginTop: "80px" }}
      >
        <h1 className="text-white text-uppercase fs-1">Our Services</h1>
        <hr className="w-25 mx-auto bg-white" />
        <p>
          A successful facility will accommodate both the serious athlete and
          the casual recreational user. Activities include organized, group
          instructional programs such as spinning classes, yoga, and martial
          arts; organized and impromptu team sports; and individual fitness
          opportunities such as cardiovascular training, weight training, and
          swimming. Individual activities may be self-guided or conducted under
          the supervision of a trainer. A Fitness Center may also accommodate
          outdoor activities with features such as a running track, swimming
          pool and sport playing fields.
        </p>
      </div>
      {/* service card */}
      <div className="container-fluid">
        <Row xs={1} md={4} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card
                className="h-100 shadow rounded mt-3"
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
    </div>
  );
};

export default Services;
