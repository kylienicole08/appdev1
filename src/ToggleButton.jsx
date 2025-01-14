import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => setIsOn(!isOn);

  return (
    <div>
      <h1>{isOn ? "The button is ON" : "The button is OFF"}</h1>
      <button onClick={toggleButton}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default ToggleButton;