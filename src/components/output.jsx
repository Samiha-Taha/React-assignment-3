import React from 'react';

const Output = ({ outputText }) => {
  return (
    <div className="output-container">
      <textarea
        value={outputText}
        placeholder="Transformed text will appear here"
      />
    </div>
  );
};

export default Output;
