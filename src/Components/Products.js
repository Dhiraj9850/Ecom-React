import React from 'react'
// import Itemcard from '../Components/Itemcard';
// import data from '../data/data';
import './css/Homepage.css';
const Products = ({ productItems,handleAddProduct }) => {
   return (

      <div>
         <h3 className="text-center">All Products</h3>
         <section className="product-container">
            <div className="row justify-content-center">

               {productItems.map((productItem) => (

                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-5">

                     <div className="card p-0 overflow-hidden h-100 shadow" id="card">
                        <img src={productItem.image} className="card-img-top" alt="propic" />
                        <div className="card-body">
                           <h5 className="card-title">{productItem.title}</h5>
                           <p className="card-text">{productItem.description}.</p>
                           <div className="brand-name">
                              <p className="name">Brand </p>
                              <h6 className="brand">: {productItem.brand}</h6>
                           </div>

                           <p className="price">Rs.{productItem.price}</p>
                           <div className="button">
                              <button className="btn btn-sm btn-primary"
                              onClick={()=>handleAddProduct(productItem)} id="cardbtn" >Add to Cart</button>
                           </div>

                        </div>
                     </div>
                  </div>

               ))
               }


            </div>
         </section>
      </div>

   )
}

export default Products