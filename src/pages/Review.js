import React from "react"
import {Routes,Route,Link} from "react-router-dom";
import WriteReview from "./WriteReview";
import axios from 'axios';

const ReviewContents = ({reviewContentsData}) => {
    return(
        <tr>
            <td>제목 : {reviewContentsData.reviewTitle} 작성자 : {reviewContentsData.writerName} 작성일자 : {reviewContentsData.createdAt} <br/>  <br/>{reviewContentsData.reviewContents} </td>
        </tr>
    )
}

const Comments = ({commentData}) => {
    return(
        <tr>
        <td>{commentData.commentId} 작성자 : {commentData.writerName} 댓글내용 : {commentData.commentContent} 작성일자 : {commentData.createdAt} <br/> </td>
    </tr>
    )
}


const requestComment = () => {
    alert("작성이 완료되었습니다.");
}


const getComments = () => {
    axios.get(URL_VARIABLE + "api/data")
    .then(function (response) {
      // 요청이 성공했을 때의 처리
      console.log(response.data); 
    })
    .catch(function (error) {
      // 요청이 실패했을 때의 처리
      console.error(error); 
    });
  }


const Review = () =>{
   
    const reviewContents = [
        {reviewTitle : '리뷰제목입니다',
        writerName : 'kim',
        createdAt : '2024.01.01',
        reviewContents : '리뷰내용입니다'
        },
    ];

    const comments = [
        {commentId : 1,
        writerName : 'kim',
        commentContent : '댓글입니다',
        createdAt : '2024.02.01'
        },
        {commentId : 2,
        writerName : 'lee',
        commentContent : '댓글입니다',
        createdAt : '2024.03.01'
        },
        {commentId : 3,
        writerName : 'park',
        commentContent : '댓글입니다',
        createdAt : '2024.03.02'
        },
    ];

    return(
        <table>
        <tbody>
            {reviewContents.map(reviewContents => <ReviewContents reviewContentsData = {reviewContents}/>)}
             <br/>
            {comments.map(comments => <Comments commentData={comments} />)}
        </tbody>
        <div>
        <input type="text"></input>
        <Link to = "/writeReview"><button onClick={requestComment}>댓글작성</button></Link >
        </div>
        <Routes>
            <Route path="/writeReview" element={<WriteReview />} />
        </Routes>
        </table>
        
    );

}
export default Review; 