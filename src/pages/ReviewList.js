import React, { useState, useEffect } from "react";
import {Routes,Route,Link} from "react-router-dom";
import Review from "./Review";
import WriteReview from "./WriteReview";
import axios from 'axios';

const Reviews = ({reviewData}) =>{
    return(
        <tr>
        <td><Link to = "/review"> {reviewData.reviewId} </Link> </td>
        <td>{reviewData.writerName}</td>
        <td>{reviewData.reviewTitle}</td>
        <td>{reviewData.createdAt}</td>
        <td>{reviewData.reviewLikeCount}</td>
        <Routes>
            <Route path="/review" element={<Review />} />
        </Routes>
    </tr>
    )
}




const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(URL_VARIABLE + "review/1");
                setReviews(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>reviewId</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                </tr>
            </thead>

            <tbody>
                {reviews.map(review => <Reviews key={review.reviewId} reviewData={review} />)}
            </tbody>
            <div>
                <Link to="/writeReview"><button >리뷰작성</button></Link>
            </div>
            <Routes>
                <Route path="/writeReview" element={<WriteReview />} />
            </Routes>
        </table>
    );
}

export default ReviewList;