import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './css/Cart.css';

const Cart = ({ cartItems,handleAddProduct,handleRemoveProduct,handleclearCart }) => {
  const totalprice = cartItems.reduce((price,item)=>price + item.quantity * item.price,0);

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h5>Cart-Items</h5>
      </div>
      {cartItems.length === 0 &&
        <div className="cart-items-empty">
           <p>No-items are added into cart(cart is empty)</p>
        </div>
      }

      <div>
        {cartItems.map((item) => (
          <div className="cart-items-container">
            <div className="items-info">
              <div className="cart-items-list" key={item.id}>
                 <div className="product-image">
                    <img src={item.image} alt="propic" />
                 </div>
              

                <div className="product-name">
                  <h4>{item.title}</h4>
                </div>
                <div className="add-minus-quantity">
                  <FontAwesomeIcon icon={faMinus} className="minus" onClick={()=>handleRemoveProduct(item)} />
                  <input type="text" placeholder={item.quantity} />
                  <FontAwesomeIcon icon={faPlus} className="plus" onClick={()=>handleAddProduct(item)} />
                </div>
                <div className="price">
                  <h4>Rs.{item.price}</h4>
                </div>
               
              </div>
              <div className="crossicon">
                  <FontAwesomeIcon icon={faCircleXmark} className="crossbtn"/>
                </div>
            </div>
          </div>
        ))
        }
      </div>
      <div className="total-price">
          <h4 className="text-end">Cart Total:Rs.{totalprice}</h4>
      </div>
      <div className="cart-btns">
         <button className="btn btn-sm btn-info">Checkout</button>
         <div className="clear-cart">
           {cartItems.length >=1 &&(
               <button className="btn btn-sm btn-danger" onClick={handleclearCart}>Clear Cart</button>
           )}
          
         </div>
       
      </div>
     
    </div>
   
  )
}

export default Cart