import React from "react"
import {Routes,Route,Link} from "react-router-dom";
import Review from "./Review";
import WriteReview from "./WriteReview";

const Reviews = ({reviewData}) =>{
    return(
        <tr>
        <td><Link to = "/review"> {reviewData.reviewId} </Link> </td>
        <td>{reviewData.writerName}</td>
        <td>{reviewData.createdAt}</td>
        <Routes>
            <Route path="/review" element={<Review />} />
        </Routes>
    </tr>
    )
}

const ReviewList = () =>{
   
    const reviews = [
        {reviewId : 1,
        writerName : 'kim',
        createdAt : '2023.01.01' },
        {reviewId : 2,
        writerName : 'lee',
        createdAt : '2023.01.03'},
        {reviewId : 3,
        writerName : 'park',
        createdAt : '2023.01.04'},
    ];

    return(
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
        <Link to = "/writeReview"><button >리뷰작성</button></Link >
        </div>
        <Routes>
            <Route path="/writeReview" element={<WriteReview />} />
        </Routes>
        </table>
        
    );

}
export default ReviewList;