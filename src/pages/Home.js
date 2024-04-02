//함수형 컴포넌트
import React, { useState, useEffect } from 'react';
import { URL_VARIABLE } from "./ExportUrl"; 
import './css/HomeStyle.css'

const Stores = ({data}) => {
  return(
    <article className="sale-item">
    <img
      src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
      alt="You get: a white computer with matching peripherals"
    />
    <h1>{data.storeName}</h1>
    <p>
      스토어 위치, 카테고리, {data.starRate}
    </p>
  </article>
  )
}


const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const size = 6;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [data]); // 데이터가 업데이트될 때마다 스크롤 이벤트를 감지

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(URL_VARIABLE + `stores?page=${page}?size=${size}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const newData = await response.json();
    setData([...data, ...newData]);
    setPage(page + 1);
    setLoading(false);
  };
  
return(
  <main className="deals">
    {data.map(data => <Stores storeData={data} />)}
    <article className="sale-item">
    <img
      src="https://www.w3.org/TR/css-flexbox-1/images/computer.jpg"
      alt="You get: a white computer with matching peripherals"
    />
    <h1>이름칸ㄴㄴㄴ</h1>
    <p>
      스토어 위치, 카테고리
    </p>
  </article>
</main>
);
}

export default Home; 


//class형 컴포넌트
// import React, {Component} from "react"

// class Home extends Component{
//     render(){
//         return <h1>Home 화면</h1>
//     }
// }

// export default Home;

