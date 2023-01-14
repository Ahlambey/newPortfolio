import React, { useEffect, useState } from "react";
import { copyToClipboard } from "../utils/utils";
import Lottie from "lottie-react";
import animationData from "./lottie/75851-paper-plane.json";
import writeAnimatiom from "./lottie/9939-write-something.json";
import "./Contact.css";
import * as Realm from "realm-web";

export default function Contact() {
  const initialValue = { name: "", email: "", subject: "", message: "" };
  const [values, setValues] = useState(initialValue);
  const [fromErrors, setFromErrors] = useState({});
  const [inputClicked, setInputClicked] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const lottieStyle = {
    height: 400,
  };

  const app = new Realm.App({ id: process.env.REACT_APP_STICH_ID });

  //Clears the popup after 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [showPopup]);

  const closeErrorAlert = () => {
    setFailure(false);
  };

  function SubmitButton() {
    const { name, email, subject, message } = values;

    if (
      name &&
      email &&
      subject &&
      message &&
      !fromErrors.name &&
      !fromErrors.email &&
      !fromErrors.subject &&
      !fromErrors.message
    ) {
      return (
        <button
          formNoValidate="formnovalidate"
          className="form-contact-btn"
          onClick={handleSubmit}
        >
          Send {isLoading && <i className="fa fa-circle-o-notch fa-spin"></i>}{" "}
        </button>
      );
    } else {
      return (
        <button
          disabled
          formNoValidate="formnovalidate"
          className="form-contact-btn"
        >
          Send
        </button>
      );
    }
  }

  const validateForm = (formValues) => {
    
    const errors = {};
    const regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.name) {
      errors.name = "Please enter your name";
    } else if (formValues.name.length < 2) {
      errors.name = "Please enter a proper name";
    }

    if (!formValues.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(formValues.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formValues.subject) {
      errors.subject = "Please enter a subject";
    } else if (formValues.subject.length < 2) {
      errors.subject = "Please enter a proper subject";
    }

    if (!formValues.message) {
      errors.message = "Please write your message";
    } else if (formValues.message.length < 10) {
      errors.message = "Please enter a message that has at least 10 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setFromErrors({ ...fromErrors, [name]: "" });
  };

  const handleFieldInput = (e) => {
    const { name } = e.target;
    setInputClicked({ ...inputClicked, [name]: name });
    
    setFromErrors(validateForm(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  const sendData = async () => {
    setIsloading(true);

    
    try {
      // Create an anonymous credential
      const credentials = Realm.Credentials.anonymous();
      // Authenticate the user
      await app.logIn(credentials);
      const mongo = app.currentUser.mongoClient("mongodb-atlas");
      const emailsCollection = mongo.db("portfolio").collection("emails");
      await emailsCollection.insertOne(values);
      
      setIsloading(false);
      setValues(initialValue);
      setSuccess(true);
    } catch (error) {
      setIsloading(false);
      setFailure(true);
    }
  };

  return (
    <div className="contact-container">
      <div
        className={`contact-from-container  ${success ? "success" : ""} ${
          failure ? "failure" : ""
        }`}
      >
        {/* Illustration on success and default */}
        {success ? (
          <div className="paper-plaine">
            <p>Thank you for getting in touch</p>
            <br></br>
            <p>I will get back to you soon!</p>
            <Lottie
              animationData={animationData}
              loop={true}
              style={lottieStyle}
            />
          </div>
        ) : (
          <div className="contact-me-illustration">
            <Lottie
              animationData={writeAnimatiom}
              loop={true}
              style={lottieStyle}
            />
          </div>
        )}

        <form>
          <h1>Let's Talk :)</h1>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            onBlur={handleFieldInput}
          ></input>
          {inputClicked.name && (
            <span className="error">{fromErrors.name}</span>
          )}

          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="email"
            onBlur={handleFieldInput}
          ></input>
          {inputClicked.email && (
            <span className="error">{fromErrors.email}</span>
          )}

          <input
            name="subject"
            value={values.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            onBlur={handleFieldInput}
          ></input>
          {inputClicked.subject && (
            <span className="error">{fromErrors.subject}</span>
          )}

          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows="10"
            cols="50"
            placeholder="Your message..."
            onBlur={handleFieldInput}
          ></textarea>
          {inputClicked.message && (
            <span className="error">{fromErrors.message}</span>
          )}

          <SubmitButton></SubmitButton>
        </form>
      </div>
      {/* Error popup */}
      <div className={`${failure ? "show-error-alert" : ""} error-alert`}>
        <span className="closebtn" onClick={closeErrorAlert}>
          &times;
        </span>
        Something Went wrong please try again or &nbsp;
        <span
          className="popup "
          onClick={() => setShowPopup(copyToClipboard())}
        >
          <span className={`popuptext alert-popup ${showPopup && "show"}`}>
            Email coppied!
          </span>
          <b>copy email</b>
        </span>
      </div>
    </div>
  );
}
