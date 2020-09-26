import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';

function App() {
  let imageInpublic = "/images/imageInPublic.jpeg"
  let name = prompt("Type in your name");

  return (
    <>
      <div style={{ border: 'solid 1px black', maxWidth: '100 vw' }}>
        <h1 className='title green'>
          Your name here
</h1>
        <h3 className='title'>{name}</h3>
        {
          [imageInSrc, imageInpublic].map(currentValue => (
            <div style={{ textAlign: 'center' }}> <img style={{ width: '30%' }} src={currentValue} alt="image" /></div>

          ))
        }


      </div>
      <video style={{ marginLeft: '35%' }} width='400' height='300' controls>

        <source src="/images/myVideo.mp4" type="video/mp4" />

      </video>
    </>
  );
}

export default App;
