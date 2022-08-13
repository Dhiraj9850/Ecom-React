import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../Components/css/Navbar.css';


const Navbar = ({ cartItems }) => {



    return (

        <div>

            <nav className="navbar fixed-top navbar-expand-lg bg-light">
            
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">E-shop</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" id="Home">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => {
                                        return { color: isActive ? 'black' : '' }
                                    }} className="nav-link" to="/About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Orders">Orders</NavLink>
                                </li>


                            </ul>
                            <div className="cart-icon">
                                <NavLink to="/Cart">
                                    <FontAwesomeIcon icon={faCartShopping} id="cart" />
                                    <p>{cartItems.length === 0 ? "0" : cartItems.length}</p>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </nav>
          
           

        </div>

    )
}

export default Navbar