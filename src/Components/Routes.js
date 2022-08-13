import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Orders from '../Pages/Orders';
import Products from './Products';
import Cart from './Cart';

const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleclearCart}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Products productItems={productItems}  handleAddProduct={handleAddProduct}/>
        </Route>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/cart">
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleclearCart={handleclearCart}/>
          </Route>
      </Switch>
    </div>
  )
}

export default Routes