import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Home from "./pages/Home";
import WriteReview from "./pages/WriteReview";
import Main from "./pages/Main";
import './css/style.css';

function App() {
  return(
    <nav className="navbar navbar-expand-custom navbar-mainbg">
    <a className="navbar-brand navbar-logo" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <div className="hori-selector">
          <div className="left" />
          <div className="right" />
        </div>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            <i className="fas fa-tachometer-alt" />
            Dashboard
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="javascript:void(0);">
            <i className="far fa-address-book" />
            Address Book
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            <i className="far fa-clone" />
            Components
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            <i className="far fa-calendar-alt" />
            Calendar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            <i className="far fa-chart-bar" />
            Charts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0);">
            <i className="far fa-copy" />
            Documents
          </a>
        </li>
      </ul>
    </div>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/reviewList" element={<ReviewList />} />
    <Route path="/review/:id" element={<Review />} />
    <Route path="/writeReview" element={<WriteReview />} />
    <Route path="/main" element={<Main />} />
  </Routes>
  </nav>    

  // <div className="App">
  // <nav>
  // <Link to = "/"> Home </Link> | <Link to = "/reviewList"> ReviewList </Link> | <Link to = "/main"> main </Link>
  // </nav>

  // </div>
  );
}

export default App;
