import { useState } from "react";
//import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import RECAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
  };

  const captchaRef = useRef(null);

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    setButtonText("Sending...");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formDetails,
      }),
    })
      .then(() =>
        setStatus({ succes: true, message: "Message sent successfully" })
      )
      .catch((error) =>
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later." + error,
        })
      );

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form data-netlify-recaptcha="true" onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstname"
                          value={formDetails.firstname}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstname", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastname"
                          value={formDetails.lastname}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastname", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="tel"
                          value={formDetails.tel}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("tel", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        <div data-netlify-recaptcha="true"></div>

                        <RECAPTCHA
                          sitekey={"6LeVYd4iAAAAAN4tNhV_RTVfEO8XJpc0k-D7b9JH"}
                          //ref={captchaRef}
                        />

                        <button
                          type="submit"
                          onPress={() => {
                            this.captchaForm.show();
                          }}
                        >
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col size={12} className="px-1">
                          <p
                            rows="6"
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
