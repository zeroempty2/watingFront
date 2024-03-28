import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Home from "./pages/Home";
import WriteReview from "./pages/WriteReview";
import Main from "./pages/Main";

function App() {
  return(
  <div className="App">
  <nav>
  <Link to = "/"> Home </Link> | <Link to = "/reviewList"> ReviewList </Link> | <Link to = "/main"> main </Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/reviewList" element={<ReviewList />} />
    <Route path="/review/:id" element={<Review />} />
    <Route path="/writeReview" element={<WriteReview />} />
    <Route path="/main" element={<Main />} />
  </Routes>
  </div>
  );
}

export default App;
