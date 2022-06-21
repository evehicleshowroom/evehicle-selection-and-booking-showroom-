import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVehicles } from '../store/actions/VehicleActions';
import img1 from "../images/revolt.jpg"


function FetchAllVehicles() {

    const vehicles = useSelector(state => state.VehicleReducer.vehicles)
    const dispatch = useDispatch();

    const myFunction = async () => {
        dispatch(getAllVehicles())
    };

    useEffect(() => {
        myFunction();
    });

    return (
        <div>
            <h2 style={{ fontWeight: "bold", color: "Highlight" }}>E-Vehicle ShowRoom</h2>
            <div className="row">
                {
                    vehicles.map((p, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/vehicle/get/${p.vehicleId}`}>
                                <div className="card" style={{ width: "200px", height: "300px" }}>
                                    <img className="card-img-top" src={img1} alt="not found" />
                                    <div className="card-body">
                                        <h4 className="card-title">{p.vehicleName}</h4>
                                        <p className="card-text">{p.vehicleModel}</p>
                                       
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FetchAllVehicles;