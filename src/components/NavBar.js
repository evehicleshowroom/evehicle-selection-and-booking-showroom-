import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/evhicle.png';

function NavBar() {

    const myUser = localStorage.getItem("myUser");
     const userId = JSON.parse(myUser).userId

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="/vehicle/all"><img src={img1} style={{width:"35px",height:"35px"}}></img></Link>
            <ul className="nav navbar-nav ml-auto">
            <li class="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            <li class="nav-item">
                    <Link className="nav-link" to="/vehicle/all">DisplayVehicles</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/vehicle/save">SaveVehicle</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to={`/user/orders/${userId}`}>MyOrders</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/customer/login">SignIn</Link>
                </li>
                <li class="nav-item">
                    {/* <Link className="nav-link" to="#">Cart</Link> */}
                    <button style={{fontSize:"20px"}}>  <Link to={`/user/cart/${userId}`}> Cart <i class="fa fa-shopping-cart"></i></Link></button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;