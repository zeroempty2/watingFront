import React, { useState, useEffect } from "react";
import {Routes,Route,Link} from "react-router-dom";
import Review from "./Review";
import WriteReview from "./WriteReview";
import axios from 'axios';
import { URL_VARIABLE } from "./ExportUrl"; 
// import { FRONT_URL_VARIABLE } from "./ExportFrontUrl"; 

const Reviews = ({ reviewData }) => {

    return (
        <tr>
            <td><Link to={`/review/${reviewData.id}`}>{reviewData.id}</Link></td>
            <td>{reviewData.nickName}</td>

            <td>{reviewData.createdAt}</td>
            <td>{reviewData.likeCount}</td>
        </tr>
    );
}

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await axios.get(URL_VARIABLE + "reviews/store/1");
            console.log(response);
            setReviews(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchReviews();
}, []); 

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>reviewId</th>
                        <th>작성자</th>
                        <th>리뷰제목</th>
                        <th>작성일자</th>
                        <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(review => <Reviews key={review.id} reviewData={review} />)}
                </tbody>
            </table>
            <div>
                <Link to="/writeReview"><button >리뷰작성</button></Link>
            </div>
            <Routes>
                <Route path="/review/:id" element={<Review />} />
                <Route path="/writeReview" element={<WriteReview />} />
            </Routes>
        </div>
    );
}

export default ReviewList;