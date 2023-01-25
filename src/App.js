import {useState, useEffect} from 'react';
import './App.css';

// const API = "http://localhost:4000";
const API = "https://mongo-node.vercel.app/"

function App() {
  return (
    <div className="App">
      
      <PhoneList />
    </div>
  );
}

function PhoneList(){
  // const mobiles = [
  //   {
  //   "model": "OnePlus 9 5G",
  //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   "company": "Oneplus"
  //   },
  //   {
  //   "model": "Iphone 13 mini",
  //   "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
  //   "company": "Apple"
  //   },
  //   {
  //   "model": "Samsung s21 ultra",
  //   "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  //   "company": "Samsung"
  //   },
  //   {
  //   "model": "Xiomi mi 11",
  //   "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  //   "company": "Xiomi"
  //   }
  //   ];

  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`)
    .then((data) => data.json())
    .then((mbs) => setMobiles(mbs));
  },[]);

  // fetch("http://localhost:4000/mobiles")
  //   .then((data) => data.json())
  //   .then((mbs) => console.log(mbs));

  return(
    <div className = "phone-list-container"> 
      {mobiles.map((mb) => (
        <Phone mobile = {mb}/>
      ))}
    </div>
  );
}

//component declaration | { mobile } -> object destructuring
function Phone({mobile}){
  // const mobile = {
  //   "model": "OnePlus 9 5G",
  //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   "company": "Oneplus"
  //   }

  //used template syntax {}
  return(
    <div className = "phone-container">
      <img src= {mobile.img} alt= {mobile.model} className = "phone-picture" />
      <h1 className = "phone-name">{mobile.model}</h1>        
      <p className = "phone-company">{mobile.company}</p>
    </div>
  )
}

export default App;
