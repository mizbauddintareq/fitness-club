import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className=" mt-5">
        <footer
          className=" text-center text-lg-start"
          style={{ backgroundColor: "#000000" }}
        >
          <div className=" p-4">
            <div className="row mt-4">
              {/* about text and icon */}
              <div className="col-lg-4 col-md-12 mb-4">
                <h5 className="text-uppercase mb-4 text-white">
                  About Fitness Club
                </h5>

                <p>
                  It all started in 1980 with one club in Cox's Bazar,
                  Bangladesh.the brand quickly became the place to be, as
                  FITNESS CLUB.
                </p>
                <p>
                  one of the original founders, started transforming fitness
                  into a lifestyle that combined health and glamour.
                </p>

                <div className="mt-2">
                  <Link
                    to="/"
                    type="button"
                    className="bg-dark text-light me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                  </Link>
                  <Link
                    to="/"
                    type="button"
                    className="bg-dark text-light me-2"
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                  </Link>

                  <Link
                    to="/"
                    type="button"
                    className="bg-dark text-light me-2"
                  >
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
                  </Link>

                  <Link to="/" type="button" className="bg-dark text-light">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </Link>
                </div>
              </div>

              {/* search field, info and icon */}
              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase mb-4 pb-1 text-white">
                  Search our package
                </h5>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control bg-dark text-white"
                    placeholder="Search Here"
                  />
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faLocationArrow}
                    />
                    <span className="ms-2">
                      Kolatoli, Cox's Bazar, Bangladesh
                    </span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon className="text-white" icon={faEnvelope} />
                    <span className="ms-2">contact@fitnessclub.com</span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon className="text-white" icon={faPhone} />
                    <span className="ms-2">+88 01580541540</span>
                  </li>
                </ul>
              </div>

              {/* opening and closing time */}
              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase mb-4 text-white">
                  Opening hours
                </h5>

                <table
                  className="table text-center"
                  style={{ color: "#adb5bd" }}
                >
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* copyright text and name with link */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright ||{" "}
            <a
              className="text-white text-decoration-none"
              target="_blank"
              href="https://www.facebook.com/mizbauddintareq"
            >
              {" "}
              Mizba Uddin Tareq
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
