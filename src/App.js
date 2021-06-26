import './App.css';
import React, { useState } from 'react'



function App() {
  const [info, setInfo] = useState('lettermark')

  const infoDisplay = () => {
    if(info === 'lettermark') {
      return (
        <div className='infoDisplay'>
          <h1 className='infoDisplayTitle'>Lettermark Logos</h1>
        </div>

      )
    }
  }



  return (
   <div className='container'>
     <div className='infoBox'>
       <div className='twoLinesOfText'>
        <li className='firstBulletPoint'>HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</li>
        <h1 className='text1'>Different Types of Logo Styes</h1>
       </div>
       <div className='contactUsButtonDiv'>
        <button onClick={() => window.location.assign('https://nytelock.com/quote/')}className='contactUsButton'>Contact Us {<img className='arrowButton' src={process.env.PUBLIC_URL + '/arrow.png'} alt='none'></img>}</button>
       </div>
      <div className='infoButtons'>
        <button onClick={() => setInfo('lettermark')}>Lettermark <br/> Logos</button>
        <button onClick={() => setInfo('wordmark')}>Wordmark <br /> Logos</button>
        <button onClick={() => setInfo('pictorial')}>Pictorial Mark <br /> Logos</button>
        <button onClick={() => setInfo('abstract')}>Abstract Mark <br /> Logos</button>
        <button onClick={() => setInfo('mascot')}>Mascot <br /> Logos</button>
        <button onClick={() => setInfo('combination')}>Combination<br /> Logos</button>
      </div>
     </div>
     {infoDisplay()}
   </div>

  );
}

export default App;
