import {useState, useEffect, React} from "react";
import CardEcommerce from "../../components/cardEcommerce";
import "./ecommerce.css";


const Ecommerce = () => {

  const [data, setData] = useState([]);
  const urlAPI = "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=1dd2e74f4145327245e3f2f3516a4606&hash=49a3e359342525361336285c9a303dce";



  useEffect(()=>{
    fetch(urlAPI)
    .then((response)=>response.json())
    .then((data)=> setData(data));
  },[])

  
  return (
    <div>
      <div className="ecommerce__menu">
      </div>
      <div className="ecommerce">
      

     {data.data?.results?.map((user)=> (<div key={user.id}><CardEcommerce title={user.title} img={user.thumbnail.path + "." + user.thumbnail.extension} price={user.prices[0].price==0 ? "agotado" : "$"+user.prices[0].price} pages={user.pageCount} ></CardEcommerce></div>))} 
       
    
      </div>
    </div>
  );
};

export default Ecommerce;


