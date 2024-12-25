// App.js
import React, { useState } from 'react';
import './App.css';
import TextBox from './components/textbox';
import Output from './components/output';

function App() {
  const [inputText, setInputText] = useState(''); // To store input text
  const [outputText, setOutputText] = useState(''); // To store transformed text

  // Handle text transformations based on the event type
  const handleTextTransform = (event) => {
    const { value } = event.target;

    let transformedText = '';
    if (value === 'uppercase') {
      transformedText = inputText.toUpperCase();
    } else if (value === 'lowercase') {
      transformedText = inputText.toLowerCase();
    } else if (value === 'capitalize') {
      transformedText = inputText
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    setOutputText(transformedText);
  };

  // Reset function to clear input and output
  const handleReset = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="app">
      <h1>Text conversion utility App</h1>
      <div className="container">
        <TextBox inputText={inputText} setInputText={setInputText} />

        <div className="buttons">
          <button value="uppercase" onClick={handleTextTransform}>Uppercase</button>
          <button value="lowercase" onClick={handleTextTransform}>Lowercase</button>
          <button value="capitalize" onClick={handleTextTransform}>Capitalize</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        <Output outputText={outputText} />
      </div>
    </div>
  );
}

export default App;
