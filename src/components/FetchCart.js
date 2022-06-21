import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react';
// import img1 from '../images/revolt.jpg'  
import { fetchCart, placeOrder } from "../store/actions/CartActions";
import { Link, useNavigate, useParams } from 'react-router-dom'


function FetchCart() {

  // const vehicle = useSelector(state => state.VehicleReducer.vehicle);
  const usercart = useSelector(state => state.CartReducer.usercart);
 
  const myUser = localStorage.getItem("myUser");
  const userId = JSON.parse(myUser).userId

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const myFunction = async () => {
    dispatch(fetchCart(id))
  };
  useEffect(() => {
    myFunction();
  },[id]);

  const handleSubmit = () => {

    const payload =
    {
      amount:usercart.cartTotal
    }
    dispatch(placeOrder(id,payload));
    alert("Order placed Successfully");
   
    
}

  return (

    <div>
          <h1>---Cart Details ---</h1>
          
           {/* <h3>Welcome {JSON.parse(myUser).userName}</h3> */}
           <h4>Your cart has {usercart.count} items</h4> 
          
          {

           usercart !==null &&

           <div>

             <center>
             <table>
              <tr>
              <th style={{paddingRight:"100px",textAlign:"center"}}>vehicle id</th>
              <th style={{paddingRight:"100px",textAlign:"center"}}>quantity</th>
              <th>item total</th>
              </tr>

              {
                usercart.cartItems.map((p)=>
                <tr>
                  <td style={{padding:"10px"}}>{p.vehicleId}</td>
                  <td>{p.quantity}</td>
                  <td>{p.itemTotal}</td>
                </tr>
                )
              }



           </table>
           </center>
           <h4>Total Price : {usercart.cartTotal}</h4>
               
             {/* <h3>vehicle name :{vehicle.vehicleName}</h3>
             <h3>vehicle Model :{vehicle.vehicleModel}</h3>
             <h3>vehicle price :{vehicle.vehiclePrice}</h3> */}
            </div>
            

         

          }
     
<br></br>
            <div>
            <Link to={`/user/orders/${userId}`}> <button onClick={handleSubmit} className="btn btn-primary">Place Order</button></Link>   
            </div>
    </div>
    
  )
}


export default FetchCart;