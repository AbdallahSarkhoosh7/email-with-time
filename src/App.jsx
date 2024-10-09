import React, { useState } from "react";
import EmailForm from "./component/EmailForm";
import Time from "./component/Time";
import "./App.css";
const App = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState(null);

  return (
    <div>
      <Time selectedTime={selectedTime} formData={formData} />
      <EmailForm
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setFormData={setFormData}
      />
    </div>
  );
};

export default App;
