import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="container-fluid text-white  mt-5">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <h1>Contact Us</h1>
          </div>

          <div className="col-sm-12 mb-4 col-md-6">
            <div className="card border-dark rounded-0">
              <div className="card-header p-0">
                <div className="bg-dark text-white text-center py-2">
                  <h3>
                    <FontAwesomeIcon icon={faEnvelope} /> Write to us:
                  </h3>
                  <p className="m-0">
                    We’ll write rarely, but only the best content.
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label className="text-dark"> Your name </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-dark">Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      name="mesg"
                      placeholder="Write Your Message"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn btn-dark btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.37497981735!2d91.93286141082926!3d21.450883578620683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1633330678318!5m2!1sen!2sbd"
                width="100%"
                height="300"
                frameborder="0"
                style={{ border: "0", filter: " grayscale(100%)" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>

            <div className="row text-center">
              <div className="col-md-4">
                <a className="bg-dark px-3 text-white rounded mb-2 d-inline-block">
                  <FontAwesomeIcon icon={faLocationArrow} size="3x" />
                </a>
                <p> Your Address ….. </p>
              </div>
              <div className="col-md-4">
                <a className="bg-dark px-3 text-white rounded mb-2 d-inline-block">
                  <FontAwesomeIcon icon={faPhone} size="3x" />
                </a>
                <p>+88 01580541540</p>
              </div>
              <div className="col-md-4">
                <a className="bg-dark px-3 text-white rounded mb-2 d-inline-block">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </a>
                <p>mail@fitnessclub.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
