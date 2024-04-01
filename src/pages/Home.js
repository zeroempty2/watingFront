//함수형 컴포넌트
import React from "react"
import './css/HomeStyle.css'

function Home(){


    <main className="deals">
    <article className="sale-item">
      <h1>Computer Starter Kit</h1>
      <p>
        This is the best computer money can buy, if you don’t have much money.
      </p>
      <ul>
        <li>Computer</li>
        <li>Monitor</li>
        <li>Keyboard</li>
        <li>Mouse</li>
      </ul>
      <img
        src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        alt="You get: a white computer with matching peripherals"
      />
      <button>BUY NOW</button>
    </article>
    <article className="sale-item">
      <h1>Printer</h1>
      <p>Only capable of printing ASCII art.</p>
      <ul>
        <li>Paper and ink not included.</li>
      </ul>
      <img
        src="https://www.w3.org/TR/css-flexbox-1/images/printer.png"
        alt="You get: a dot-matrix printer."
      />
      <button>BUY NOW</button>
    </article>
    <article className="sale-item">
      <h1>Printer 2</h1>
      <p>A la 1989.</p>
      <img
        src="https://www.w3.org/TR/css-flexbox-1/images/printer.png"
        alt="You get: a dot-matrix printer."
      />
      <button>BUY NOW</button>
    </article>
    <article className="sale-item">
      <h1>Mouse</h1>
      <p>
        A computer mouse is a pointing device (hand control) that detects
        two-dimensional motion relative to a surface. This motion is typically
        translated into the motion of a pointer on a display, which allows a
        smooth control of the graphical user interface. Clickity Click!
      </p>
      <button>BUY NOW</button>
    </article>
    <article className="sale-item">
      <h1>Macintosh 8500</h1>
      <p>
        This is the best computer money can buy, if you don’t have much money.
        This computer was state of the art in 1995.
      </p>
      <img
        src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
        alt="You get: a white computer with matching peripherals."
      />
      <button>BUY NOW</button>
      
    </article>
  </main>

    
  ;
}

export default Home; 


//class형 컴포넌트
// import React, {Component} from "react"

// class Home extends Component{
//     render(){
//         return <h1>Home 화면</h1>
//     }
// }

// export default Home;

