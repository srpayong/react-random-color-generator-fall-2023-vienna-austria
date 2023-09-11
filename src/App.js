import React, { useState } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[randomNumber(16)];
  }
  return color;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function RandomColorGenerator() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: '300px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <button
        onClick={changeColor}
        style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#0074D9',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Generate Random Color
      </button>
    </div>
  );
}

export default RandomColorGenerator;
