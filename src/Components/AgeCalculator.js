import React, { useState } from 'react';
import './AgeCalculator.css'; 
function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    if (dob) {
      const dobDate = new Date(dob);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - dobDate;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      setAge(ageInYears);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label><h3>Enter your date of birth<br/></h3></label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <button onClick={calculateAge} className="calculate-button">
        Calculate Age
      </button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}
export default AgeCalculator;
