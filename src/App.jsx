import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!##$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-3 my-8 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly />
        <button className="outline-none bg-blue p-4 bg-blue-500">Copy</button>
      </div>
      <div className="flex justify-evenly">
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" name="" id="" min={6} max={35} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="length">Length {length}</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="number">Numbers</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="" checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
