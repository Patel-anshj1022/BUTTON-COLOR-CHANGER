import React, { useState } from 'react';

const colors = [
  'red', 'green', 'blue', 'yellow', 'purple',
  'orange', 'pink', 'teal', 'cyan', 'magenta',
  'brown', 'black', 'white', 'gray', 'lime',
  'maroon', 'navy', 'olive', 'coral', 'gold'
];

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <h1 style={styles.heading}>🎨 Click a Color</h1>
      <div style={styles.buttonContainer}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{ ...styles.button, backgroundColor: color, color: getTextColor(color) }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

const getTextColor = (bg) => {
  const darkColors = ['black', 'navy', 'purple', 'maroon', 'blue', 'gray', 'brown'];
  return darkColors.includes(bg) ? 'white' : 'black';
};

const styles = {
  container: {
    minHeight: '100vh',
    textAlign: 'center',
    padding: '40px',
    transition: 'background-color 0.3s ease'
  },
  heading: {
    marginBottom: '30px',
    fontSize: '2rem'
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 16px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  }
};

export default App;
