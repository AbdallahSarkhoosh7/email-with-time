import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmailForm.css";

const EmailForm = ({ selectedTime, setSelectedTime, setFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      from_name: name,
      from_email: email,
      message: message,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card p-3" style={{ width: "400px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                className="form-control"
                type="email"
                placeholder="to email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <textarea
                className="form-control"
                cols={30}
                rows={5}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <p>Enter time</p>
              <input
                className="form-control"
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Set Email Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
