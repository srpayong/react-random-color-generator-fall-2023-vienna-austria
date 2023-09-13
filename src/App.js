import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());
  const [hue, setHue] = useState(0); // Initialize hue value
  const [lightness, setLightness] = useState(50); // Initialize lightness value

  const generateRandomColor = () => {
    const newColor = randomColor({
      hue: hue,
      luminosity: 'light', // We use 'light' to control lightness
    });
    setBackgroundColor(newColor);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 'thick',
        flexDirection: 'column',
        fontFamily: 'monospace',
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
          borderRadius: '200px',
          backgroundColor: backgroundColor,
          borderColor: 'white',
          textAlign: 'center',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'ease-n-out',
        }}
      >
        Generated color: {backgroundColor}
        <br />
      </div>
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
          background: 'backgroundColor',
          color: 'black',
          borderColor: 'backgroundColor',
          borderWidth: '4px',
        }}
        onClick={generateRandomColor}
      >
        Generate
      </button>
      <br />

      <h2>Hue</h2>
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        value={hue}
        onChange={(event) => setHue(parseInt(event.target.value))}
        style={{
          background: 'white',
          borderColor: backgroundColor,
          borderWidth: '3px',
          width: '15vh',
          height: '8vh',
          borderRadius: '20px',
          textAlign: 'center',
          fontSize: '20px',
        }}
      />
      <span>{hue}°</span>
      <br />

      <h2>Lightness</h2>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={lightness}
        onChange={(event) => setLightness(parseInt(event.target.value))}
        style={{
          background: 'white',
          borderColor: backgroundColor,
          borderWidth: '3px',
          width: '15vh',
          height: '8vh',
          borderRadius: '20px',
          textAlign: 'center',
          fontSize: '20px',
        }}
      />
      <span>{lightness}%</span>
    </div>
  );
}
