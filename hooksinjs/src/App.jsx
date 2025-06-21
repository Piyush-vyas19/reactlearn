import React, { useCallback, useState,useRef } from 'react';
import { useEffect } from 'react';

export default function App() {
  let [length, setLength] = useState(10);
  let [numberallowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordref = useRef();
  const copyToClipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)

  }, [password]);
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberallowed, characterAllowed]);
   useEffect(() => {
    passwordGenerator();
  }
  , [length, numberallowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <h1 className='text-4xl text-center text-white mt-8'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 text-white'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>
            copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={20} value={length} onChange={(e)=>{
              setLength(e.target.value);
            }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={numberallowed} onChange={(e) => {
              setNumberAllowed(e.target.checked);
            }} />
            <label>Numbers</label>
         
        </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' checked={characterAllowed} onChange={(e) => {
              setCharacterAllowed(e.target.checked);
            }} />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
