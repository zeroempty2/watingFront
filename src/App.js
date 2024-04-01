import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Home from "./pages/Home";
import WriteReview from "./pages/WriteReview";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return(
  <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MainPage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link >
            <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Arial, sans-serif' , color: 'white' }}>Home</Link>
          </Nav.Link>
          <Nav.Link to = "/reviewList"> ReviewList </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/reviewList" element={<ReviewList />} />
    <Route path="/review/:id" element={<Review />} />
    <Route path="/writeReview" element={<WriteReview />} />
    <Route path="/main" element={<Main />} />
  </Routes>
  <div>
  <div>
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
    </div>   
  </div>
  </div>

  
  );
}

export default App;
