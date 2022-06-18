import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I'm Alexander Persson").start()
          }}
        />
      </h1>
    </div>
  );
}

export default App;
