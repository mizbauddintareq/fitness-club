import {
  faClinicMedical,
  faDumbbell,
  faHeartbeat,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../images/about.jpg";

const About = () => {
  return (
    <div className="container-fluid my-5">
      {/* about text center */}
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-12">
          <div className="text-center">
            <h1 className="fs-1 text-white">Welcome to fitness club</h1>
            <hr className="w-50 mx-auto bg-white" />
            <p className="mx-auto">
              You’ve made the decision to join the gym. But which is best for
              you - a fitness club or a standard gym? Cost, types of membership{" "}
              <br />
              and opening hours all play a factor in this decision. At the end
              of the day, going to the right gym is all about the facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* about text left */}
        <div className="col-md-6">
          <div className="mt-3">
            <p className="fw-bold text-white">Training personal to you</p>

            <h4 className="fw-bold text-capitalize mt-4 text-white">
              It’s not just about the exercise
            </h4>
            <p className="mt-3">
              As we’ve said, if you lack confidence in your own ability at the
              gym it can really be an off-putting factor. But with a fitness
              club, you don’t have to feel intimidated if you don’t really know
              what you’re doing in the gym, thanks to personal trainers. A
              member of the club’s staff can talk you through all the equipment
              and provide you with training plans so you can get exactly what
              you want out of your gym workouts. Plus you’ll have an experienced
              and knowledgeable figure to support and motivate you through your
              session.
            </p>

            <p className="mt-3">
              {" "}
              A premium fitness club offers nutritionist services because what
              we eat what how we move are deeply correlated. Education, guidance
              and constant professional support on nutrition is what fuels a
              balanced lifestyle.
            </p>
          </div>
        </div>
        {/* about image */}
        <div className="col-md-6">
          <div className=" mt-3">
            <img src={img} alt="" className="img-fluid mx-auto d-block" />
          </div>
        </div>
      </div>

      {/* about cart */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#14213d", color: "#adb5bd" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon
                className="text-white"
                icon={faDumbbell}
                size="6x"
              />
              <h5 className="card-title text-white text-uppercase mt-4">
                Quality Equipment
              </h5>
              <p className="card-text">
                <small>
                  From muscle building and toning to cardio and endurance, get
                  the benefits of state-of-the-art exercises prescribed by our
                  experts, tailored to your goals.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#14213d", color: "#adb5bd" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon
                className="text-white"
                icon={faClinicMedical}
                size="6x"
              />
              <h5 className="card-title text-white text-uppercase mt-4">
                healthy nutrition plan
              </h5>
              <p className="card-text">
                <small>
                  Whether your goal is to improve your physical performance,
                  lose weight or meet a new goal, our experts will provide
                  support and guidance throughout your journey.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#14213d", color: "#adb5bd" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon
                className="text-white"
                icon={faShower}
                size="6x"
              />
              <h5 className="card-title text-white text-uppercase mt-4">
                Free shower facilities
              </h5>
              <p className="card-text">
                <small>
                  You’d have to search far and wide to find a regular gym with a
                  pool.swimming is an effective exercise for getting trim
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100 shadow rounded"
            style={{ backgroundColor: "#14213d", color: "#adb5bd" }}
          >
            <div className="card-body text-center">
              <FontAwesomeIcon
                className="text-white"
                icon={faHeartbeat}
                size="6x"
              />
              <h5 className="card-title text-white mt-4 text-uppercase">
                Unique to your needs
              </h5>
              <p className="card-text">
                <small>
                  For some, the most daunting part of going to a regular gym is
                  being there and having to workout on your own.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
