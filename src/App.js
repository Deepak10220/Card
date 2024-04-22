import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [products,setproducts]=useState([
    {
      id:1,
      img:"https://www.course-api.com/images/cart/phone-1.png",
      name:"Samsung S21",
      quantity:1,
      price:100000,
    },
    {
      id:2,
      img:"https://www.course-api.com/images/cart/phone-2.png",
      name:"BlackBarry",
      quantity:1,
      price:50000,
    },
    {
      id:3,
      img:"https://www.course-api.com/images/cart/phone-3.png",
      name:"",
      quantity:1,
      price:130000,
    },
  ]);

const [quantity,setQuantity]=useState(3);
  return (
    <div className="App">
      <Navbar quantity={quantity}/>
      <Cart products={products} setproducts={setproducts} setQuantity={setQuantity} quantity={quantity}/>
    </div>
  );
}

export default App;
