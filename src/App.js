import React, { useState } from 'react';

// Generate a random color with optional hue and luminosity
function generateRandomColor(hue = -1, luminosity = -1) {
  // Generate a random hue if not provided
  const randomHue = hue === -1 ? Math.floor(Math.random() * 360) : hue;

  // Generate a random luminosity if not provided
  const randomLuminosity =
    luminosity === -1 ? Math.floor(Math.random() * 101) : luminosity;

  return `hsl(${randomHue}, 100%, ${randomLuminosity}%)`;
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());
  const [hue, setHue] = useState(-1);
  const [luminosity, setLuminosity] = useState(-1);

  // Function to update color when sliders change
  const updateColor = () => {
    const color = generateRandomColor(hue, luminosity);
    setBackgroundColor(color);
  };

  // Update the color when the luminosity slider changes
  const handleLuminosityChange = (e) => {
    const newLuminosity = e.target.value === '' ? -1 : parseInt(e.target.value);
    setLuminosity(newLuminosity);
    updateColor();
  };

  // Generate a random color when the button is clicked
  const handleGenerateClick = () => {
    updateColor();
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'pink', textDecoration: 'underline' }}>
        Random Color Generator
      </h1>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: '300px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
          margin: '20px auto',
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <button onClick={handleGenerateClick}>Generate Random Color</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px auto',
        }}
      >
        <label style={{ marginRight: '20px' }}>
          Hue:
          <br />
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={hue === -1 ? '' : hue}
            onChange={(e) => {
              const newHue =
                e.target.value === '' ? -1 : parseInt(e.target.value);
              setHue(newHue);
              updateColor();
            }}
          />
          {hue !== -1 && <span>{hue}°</span>}
        </label>
        <label>
          Luminosity:
          <br />
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={luminosity === -1 ? '' : luminosity}
            onChange={handleLuminosityChange}
          />
          {luminosity !== -1 && <span>{luminosity}%</span>}
        </label>
      </div>
    </div>
  );
}

export default App;
