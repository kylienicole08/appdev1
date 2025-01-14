import { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default TextInput;