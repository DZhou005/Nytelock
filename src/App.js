import './App.css';
import React, { useState } from 'react'



function App() {
  const [info, setInfo] = useState('lettermark')

  const infoDisplay = () => {
    if(info === 'lettermark') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Lettermark Logos</h1>
            <p className='infoDisplayDescription'>A Monogram or lettermark is a typography-based logo that's comprised of a few letters, usually a company's initials. The lettermark is all about simplicity.<br/><br/>By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/HBO.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/IBM.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/Nasa.png'} alt='none'></img>
          </div>
        </div>



      )
    }
    else if(info === 'wordmark') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Wordmark Logos</h1>
            <p className='infoDisplayDescription'>Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/visa.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/coke.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/google.png'} alt='none'></img>
          </div>
        </div>
      )
    }
    else if(info === 'pictorial') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Pictorial Mark Logos</h1>
            <p className='infoDisplayDescription'>A pictorial mark (sometimes called brand mark or logo symbol) is an icon--or graphic-based logo. It's probably the image that comes to mind when you think "logo":the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/visa.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/coke.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/google.png'} alt='none'></img>
          </div>
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
