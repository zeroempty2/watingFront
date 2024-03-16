import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import ReviewList from "./pages/ReviewList";
import Review from "./pages/Review";
import Home from "./pages/Home";
import WriteReview from "./pages/WriteReview";

function App() {
  return(
  <div className="App">
  <nav>
  <Link to = "/"> Home </Link> | <Link to = "/reviewList/*"> ReviewList </Link> 
  </nav>
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/reviewList/*" element={<ReviewList />} />
    <Route path="/review" element={<Review />} />
    <Route path="/writeReview" element={<WriteReview />} />
  </Routes>
  </div>
  );
}

export default App;
