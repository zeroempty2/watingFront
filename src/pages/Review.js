import React ,{useState,useEffect} from "react"
import {Routes,Route,useParams} from "react-router-dom";
import WriteReview from "./WriteReview";
import axios from 'axios';
import { URL_VARIABLE } from "./ExportUrl"; 

const Comments = ({commentData}) => {
    return(
        <tr>
        <td>{commentData.commentId} 작성자 : {commentData.nickName} 댓글내용 : {commentData.commentContent} 작성일자 : {commentData.createdAt} <br/> </td>
    </tr>
    )
}

// const ReviewContents = ({reviewContentsData}) => {
//     return(
//         <tr>
//             <td>제목 : {reviewContentsData.reviewTitle} 작성자 : {reviewContentsData.writerName} 작성일자 : {reviewContentsData.createdAt} <br/>  <br/>{reviewContentsData.reviewContents} </td>
//         </tr>
//     )
// }

// const writeComment = () => {
//     axios.post(URL_VARIABLE + "api/data")
//     .then(function (response) {
//       // 요청이 성공했을 때의 처리
//       console.log(response.data); 
//     })
//     .catch(function (error) {
//       // 요청이 실패했을 때의 처리
//       console.error(error); 
//     });
// }



const Review = () =>{
    
    const { id } = useParams(); 
    const [reviewContents,setReviewContents] = useState();
    const [comments,setComment] = useState([]);
    
    // useEffect(() => {
    //     const fetchReview = async () => {
    //         try {
    //             const response = await axios.get(URL_VARIABLE + "reviews/" + id);
    //             console.log(response);
    //             setReviewContents(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchReview();
    // },[id])

const fetchReview = async () => {
    await axios.get(URL_VARIABLE + "reviews/" + id)
    .then(function (response) {
    setReviewContents(response.data);
      console.log(response.data); 
    })
    .catch(function (error) {
      console.error(error); 
    });
}

fetchReview();


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(URL_VARIABLE + "comments/review/" + id);
                console.log(response);
                setComment(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchComments();
    }, [id])


    return(
        <table>
        <tbody>
        <tr>
            <td>제목 : {reviewContents.reviewTitle} 작성자 : {reviewContents.writerName} 작성일자 : {reviewContents.createdAt} <br/>  <br/>{reviewContents.reviewContents} </td>
        </tr>
             <br/>
            {comments.map(comments => <Comments commentData={comments} />)}
        </tbody>
        <div>
        <input type="text"></input>
        {/* <Link to = "/writeReview"><button onClick={writeComment}>댓글작성</button></Link > */}
        </div>
        <Routes>
            <Route path="/writeReview" element={<WriteReview />} />
        </Routes>
        </table>
        
    );

}
export default Review; 