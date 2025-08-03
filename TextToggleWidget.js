import React, { useState } from 'react';

function TextToggleWidget() {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Interactive Text & Toggle</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Type something..."
      />
      <button
        onClick={toggleVisibility}
        className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded"
      >
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p className="mb-2">{text}</p>}
      <p className="text-sm text-gray-500">Character count: {text.length}</p>
    </div>
  );
}

export default TextToggleWidget;
