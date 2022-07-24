import React from 'react'
import './Skills.css';
import csharp from './imgs/prog/csharp.png';
import css3 from './imgs/prog/css3.png';
import html5 from './imgs/prog/html5.png';
import java from './imgs/prog/java.png';
import js from './imgs/prog/js.jpg';
import python from './imgs/prog/python.png';
import react from './imgs/prog/react.png';

export default function Skills() {
  return (
    <div className='Skills'>
        <h1>My Software <font color="#9E01F7">Skills</font></h1>
        <div className='boxes'>
          <div className='frontend'>
            <p>Frontend</p>
            <div className='box'>
                <span>
                  <div className='box-item'>
                    <img src={html5} alt='' width={40} height={45}></img>
                    <p>HTML5</p>
                  </div>
                  <div className='box-item'>
                    <img src={css3} alt='' width={40} height={45}></img>
                    <p>CSS3</p>
                  </div>
                  <div className='box-item'>
                    <img src={js} alt='' width={45} height={45}></img>
                    <p>JavaScript</p>
                  </div>
                  <div className='box-item'>
                    <img src={react} alt='' width={50} height={45}></img>
                    <p>React</p>
                  </div>
                </span>
            </div>
          </div>
          <div className='backend'>
            <p>Backend</p>
            <div className='box'>
                <span>
                  <div className='box-item'>
                    <img src={java} alt='' width={40} height={45}></img>
                    <p>Java</p>
                  </div>
                  <div className='box-item'>
                    <img src={python} alt='' width={40} height={45}></img>
                    <p>Python</p>
                  </div>
                  <div className='box-item'>
                    <img src={csharp} alt='' width={50} height={50}></img>
                    <p>C#</p>
                  </div>
                </span>
            </div>
          </div>
        </div>
    </div>
  )
}