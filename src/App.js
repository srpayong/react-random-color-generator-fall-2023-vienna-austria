import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

function ColorGenerator() {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));
  const [lightness, setLightness] = useState(50);

  const generateRandomColor = () => {
    const newHue = Math.floor(Math.random() * 360);
    const newLightness = Math.floor(Math.random() * 101);

    setHue(newHue);
    setLightness(newLightness);
  };

  const generatedColor = tinycolor({ h: hue, s: 100, l: lightness });
  const hexColor = generatedColor.toHexString();

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
          backgroundColor: hexColor,
          textAlign: 'center',
          fontSize: '20px',
          fontFamily: 'papyrus',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'ease',
        }}
      >
        Generated Color: {hexColor}
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
        onChange={(e) => setHue(parseInt(e.target.value))}
      />
      <br />
      <label htmlFor="lightnessSlider">Lightness:</label>
      <input
        id="lightnessSlider"
        type="range"
        min="0"
        max="100"
        value={lightness}
        onChange={(e) => setLightness(parseInt(e.target.value))}
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
          background: hexColor,
          color: 'black',
          borderColor: hexColor,
          borderWidth: '4px',
        }}
        onClick={generateRandomColor}
      >
        Generate
      </button>
    </div>
  );
}

export default ColorGenerator;
