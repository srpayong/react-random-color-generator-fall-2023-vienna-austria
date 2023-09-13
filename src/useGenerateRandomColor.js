// import randomColor from 'randomcolor';
// import React, { useState } from 'react';

// function ColorGenerator() {
//   const [backgroundColor, setBackgroundColor] = useState(randomColor());
//   const generatedColorText = `Generated Color: ${backgroundColor}`;

//   const generateRandomColor = () => {
//     const newColor = randomColor();
//     setBackgroundColor(newColor);
//   };

//   return (
//     <div>
//       <button
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '15vw',
//           height: '8vh',
//           borderRadius: '10px',
//           fontSize: '20px',
//           background: 'backgroundColor',
//           color: 'black',
//           borderColor: 'backgroundColor',
//           borderWidth: '4px',
//         }}
//         onClick={generateRandomColor}
//       >
//         Generate
//       </button>
//       <div
//         style={{
//           width: '300px',
//           height: '300px',
//           borderRadius: '200px',
//           backgroundColor: backgroundColor,
//           borderColor: 'white',
//           textAlign: 'center',
//           fontSize: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           transition: 'ease-n-out',
//           padding: '20px',
//           marginTop: '20px',
//         }}
//       >
//         {generatedColorText}
//       </div>
//     </div>
//   );
// }

// export default ColorGenerator;
