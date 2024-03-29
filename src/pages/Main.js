// import React ,{useState,useEffect} from "react"
// import {Routes,Route} from "react-router-dom";
// import axios from 'axios';
// import { URL_VARIABLE } from "./ExportUrl"; 
import React from "react"
import './css/style.css';

// const Stores = ({storeData}) =>{
//     return (
//         <tr>
//             <td>{storeData.id}</td>
//             <td>{storeData.storeName}</td>
//             <td>{storeData.starRate}</td>
//         </tr>
//     );
// }

const Main = () =>{

    // const [stores,setStore] = useState([]);

    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         try {
    //             const response = await axios.get(URL_VARIABLE + "stores");
    //             console.log(response);
    //             setStore(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    
    //     fetchReviews();
    // }, []); 


    return (
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
    </nav>    

    );
}

export default Main;






