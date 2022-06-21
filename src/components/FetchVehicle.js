import { useDispatch ,useSelector } from "react-redux"
import React, { useEffect } from 'react';
import {FetchVehicleById} from '../store/actions/VehicleActions'
import img1 from '../images/revolt.jpg'
import {Link, useParams} from 'react-router-dom'


function FetchVehicle() {

    const vehicle = useSelector(state=>state.VehicleReducer.vehicle);

    const dispatch = useDispatch();

    const{id} =useParams();

    const myFunction = async () => {
        dispatch(FetchVehicleById(id))
    };
    useEffect(() => {
        myFunction();
    },[id]);
    return (

        <div>

            <h1>---- Vehicle Details ----</h1>
            {
                vehicle !== null &&
                <div className="row">
                    <div className="col" >
                        <img src={img1} alt="not found" style={{ width: "400px", height: "300px" }} />
                    </div>
                    <div className="col">

                        <p> Vehicle Id : {vehicle.vehicleId}</p>
                        <p> Vehicle Name : {vehicle.vehicleName}</p>
                        <p> Vehicle Model : {vehicle.vehicleModel}</p>
                        <p> Vehicle Color : {vehicle.vehicleColor}</p>
                        <p> Vehicle Price : {vehicle.vehiclePrice}</p>
                        <Link to={`/product/update/${vehicle.vehicleId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <Link to={`/product/delete/${vehicle.vehicleId}`} className="btn btn-secondary">Delete</Link><br></br><br></br>
                       <Link to="/cart"><button type="button"
                                            class="btn btn-success">
                                            <span class="glyphicon 
                    glyphicon-shopping-cart">
                                            </span>
                                            <b style={{color:"ButtonFace"}}> Add to Cart </b>
                                        </button></Link> 


                    </div>

                </div>
            }
            <div>
                <Link to="/vehicle/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}


export default FetchVehicle;