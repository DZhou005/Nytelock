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
            <p className='infoDisplayDescription'>A pictorial mark (sometimes called brand mark or logo symbol) is an icon--or graphic-based logo. It's probably the image that comes to mind when you think "logo":the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable. <br/><br/> A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/apple.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/twitter.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/target.png'} alt='none'></img>
          </div>
        </div>
      )
    }
    else if(info === 'abstract') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Abstract Mark Logos</h1>
            <p className='infoDisplayDescription'>An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower.<br/><br/>Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something unrecognizable, abstract logos allow you to create something truly unique to represent your brand.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/bp.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/pepsi.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/adidas.png'} alt='none'></img>
          </div>
        </div>
      )
    }
    else if(info === 'mascot') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Mascot Logos</h1>
            <p className='infoDisplayDescription'>Mascot logos are logos that invovle an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson<br/><br/> A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/koolaid.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/kfc.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/peanut.png'} alt='none'></img>
          </div>
        </div>
      )
    }
    else if(info === 'combination') {
      return (
        <div className='infoContainer'>
          <div className='infoDisplay'>
            <h1 className='infoDisplayTitle'>Combination Logos</h1>
            <p className='infoDisplayDescription'>A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or intergrated together to create an image. <br/><br/> Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.</p>
          </div>
          <div className='infoPicContainer'>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/doritos.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/burgerking.png'} alt='none'></img>
            <img className='infoPics' src={process.env.PUBLIC_URL + '/lacoste.png'} alt='none'></img>
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
      <div className='infoButtonsContainer'>
        <button className='fas fa-italic infoButtons' onClick={() => setInfo('lettermark')}><div className='buttonInnerText'>Lettermark <br/><br/>Logos</div></button>
        <button className='fab fa-weebly infoButtons' onClick={() => setInfo('wordmark')}><div className='buttonInnerText'>Wordmark <br/><br/>Logos</div></button>
        <button className='fas fa-lemon infoButtons' onClick={() => setInfo('pictorial')}><div className='buttonInnerText'>Pictorial Mark<br/><br/>Logos</div></button>
        <button className='fab fa-artstation infoButtons' onClick={() => setInfo('abstract')}><div className='buttonInnerText'>Abstract Mark <br/><br/>Logos</div></button>
        <button className='fas fa-theater-masks infoButtons' onClick={() => setInfo('mascot')}><div className='buttonInnerText'>Mascot <br/><br/>Logos</div></button>
        <button className='fas fa-puzzle-piece infoButtons' onClick={() => setInfo('combination')}><div className='buttonInnerText'>Combination <br/><br/>Logos</div></button>
      </div>
     </div>
     {infoDisplay()}
   </div>

  );
}

export default App;
