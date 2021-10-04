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
          className="text-white text-center text-lg-start"
          style={{ backgroundColor: "#000000" }}
        >
          <div className=" p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div className="mt-4">
                  <Link type="button" className="bg-dark text-light mx-2">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                  </Link>
                  <Link type="button" className="bg-dark text-light">
                    <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                  </Link>

                  <Link type="button" className="bg-dark text-light mx-2">
                    <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
                  </Link>

                  <Link type="button" className="bg-dark text-light">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </Link>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control me-2 bg-dark text-white"
                    placeholder="Search Here"
                  />
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <span className="ms-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ms-2">contact@example.com</span>
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 mb-4">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
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

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
