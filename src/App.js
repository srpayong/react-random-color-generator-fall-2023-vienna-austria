import React, { useState } from 'react';

function ColorGenerator() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  const [lightness, setLightness] = useState(50);

  const generatedColorText = `Generated Color: hsl(${hue}, 100%, ${lightness}%)`;

  const generateRandomColor = () => {
    const newHue = Math.floor(Math.random() * 360);
    const newLightness = Math.floor(Math.random() * 101);
    setHue(newHue);
    setLightness(newLightness);
  };

  const handleHueChange = (event) => {
    setHue(event.target.value);
  };

  const handleLightnessChange = (event) => {
    setLightness(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'verdana',
      }}
    >
      <h1
        style={{
          color: 'honeydew',
          fontFamily: 'chalkduster',
          textDecoration: 'underline dotted',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: `hsl(${hue}, 100%, ${lightness}%)`,
          textAlign: 'center',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'ease-in-out',
        }}
      >
        Generated Color: hsl({hue}, 100%, {lightness}%)
        <br />
      </div>
      <br />
      <label htmlFor="hueSlider">Hue:</label>
      <input
        id="hueSlider"
        type="range"
        min="0"
        max="359"
        value={hue}
        onChange={handleHueChange}
      />
      <br />
      <label htmlFor="lightnessSlider">Lightness:</label>
      <input
        id="lightnessSlider"
        type="range"
        min="0"
        max="100"
        value={lightness}
        onChange={handleLightnessChange}
      />
      <br />
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '15vw',
          height: '8vh',
          borderRadius: '10px',
          fontSize: '20px',
          background: `hsl(${hue}, 100%, ${lightness}%)`,
          color: 'black',
          borderColor: `hsl(${hue}, 100%, ${lightness}%)`,
          borderWidth: '4px',
        }}
        onClick={generateRandomColor}
      >
        Generate
      </button>
      {generatedColorText}
    </div>
  );
}

export default ColorGenerator;
