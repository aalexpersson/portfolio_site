import React from 'react'
import './Feature.css';
import Typewriter from 'typewriter-effect';
import developer from './imgs/dev.png';


export default function Feature() {
  return (
    <div className='Feature'>
        <div className='feature-text'>
          <h1>I'm <font color="#9E01F7">Alexander Persson</font> </h1>
          <h3>
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter.typeString("Software Engineering Student").start()
                  }}
                  />
          </h3>
        </div>
        <div className='feature-graphic'>
          <img src={developer} alt='' width={485} height={400}></img>
           {/* <a href="https://www.freepik.com/psd/programmer-code">Programmer code psd created by Graphue - www.freepik.com</a> */}
        </div>
    </div>
  )
}
