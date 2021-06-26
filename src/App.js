import './App.css';
import React, { useState } from 'react'



function App() {
  const [info, setInfo] = useState('lettermark')
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
      <button>Lettermark <br/> Logos</button>
     </div>

   </div>
  );
}

export default App;
