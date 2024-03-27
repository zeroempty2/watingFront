import React ,{useState,useEffect} from "react"
import {Routes,Route} from "react-router-dom";
import axios from 'axios';
import { URL_VARIABLE } from "./ExportUrl"; 

const Stores = ({storeData}) =>{
    return (
        <tr>
            <td>{storeData.id}</td>
            <td>{storeData.storeName}</td>
            <td>{reviewData.starRate}</td>
        </tr>
    );
}
const Main = () =>{
    const [stores,setStore] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(URL_VARIABLE + "stores");
                console.log(response);
                setStore(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchReviews();
    }, []); 
    return (
        <div>
             <table>
        <tbody>
            {stores.map(stores => <Stores storeData={stores} />)}
        </tbody>

        </table>
        </div>
    );
}

export default Main;

