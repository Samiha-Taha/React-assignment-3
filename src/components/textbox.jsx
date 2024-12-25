import React from 'react';

const TextBox = ({ inputText, setInputText }) => {
  return (
    <div className="input-container">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};

export default TextBox;
