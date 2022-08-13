import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import data from './data/data';
import Routes from './Components/Routes';


export default function App() {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct=(product)=>{
       const productExist = cartItems.find((item)=>item.id===product.id);
       if(productExist){
          setCartItems(cartItems.map((item)=>item.id===product.id?
           {...productExist,quantity:productExist.quantity + 1}:item)
          );
       }
       else{
          setCartItems([...cartItems,{...product,quantity:1}]);
       }
  }

  const handleRemoveProduct=(product)=>{
       const productExist = cartItems.find((item)=>item.id===product.id);
       if(productExist.quantity === 1){
          setCartItems(cartItems.filter((item)=>item.id!==product.id));
       }
       else{
        setCartItems(
          cartItems.map((item)=>item.id===product.id ? {...productExist,quantity:productExist.quantity -1}:item)
        )
       }
  }
  const handleclearCart=()=>{
    setCartItems([]);
  }
  return (
    <>
      <Router>
        <Navbar cartItems={cartItems}/>
        <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleclearCart={handleclearCart}/>
  
      </Router>
    </>
  )
}
