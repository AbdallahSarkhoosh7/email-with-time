import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Time = (props) => {
  const [time, setTime] = useState(new Date());
  const [emailSent, setEmailSent] = useState(false);
  0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      if (
        props.selectedTime &&
        currentTime.toLocaleTimeString("en-GB").substring(0, 5) ===
          props.selectedTime &&
        !emailSent
      ) {
        sendEmail();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [props.selectedTime, props.formData, emailSent]);

  const sendEmail = () => {
    if (!props.formData) {
      console.error("No form data available for sending email.");
      return;
    }

    const serviceId = "service_34v9xsl";
    const templateId = "template_zu4c92k";
    const publicKey = "iZ925n9a400euW6w_";

    emailjs
      .send(serviceId, templateId, props.formData, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <div className="container text-center mt-3" style={{ padding: "40px" }}>
      <h1 className="h4 text-primary">Current Time</h1>{" "}
      <div className="card bg-light p-2">
        <h2 className="time-display fw-bold text-dark">
          {time.toLocaleTimeString()}
        </h2>
      </div>
    </div>
  );
};

export default Time;
