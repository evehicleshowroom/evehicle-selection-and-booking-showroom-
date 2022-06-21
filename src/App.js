import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import Counter from './components/Counter';
import FetchAllVehicles from './components/FetchAllVehicles';
import FetchVehicle from './components/FetchVehicle';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SaveVehicle from './components/SaveVehicle';
import EditVehicle from './components/EditVehicle';
import Cart from './components/Cart';
import Login from './components/Login';
import FetchCart from './components/FetchCart';
import Order from './components/Order';

// import { FetchVehiclee } from './store/actions/VehicleActions';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        {/* <Route path="/counter" element={<Counter/>}></Route> */}
        <Route path="/" element={<Home/>}/>
        <Route path="vehicle/all" element={<FetchAllVehicles/>}></Route>
        <Route path="/vehicle/get/:id" element={<FetchVehicle/>}></Route>
        <Route path="/user/cart/:id" element={<FetchCart/>}></Route>
        {/* <Route path="/place/order/:id" element={<Order/>}></Route> */}
        <Route path="/user/orders/:id" element={<Order/>}></Route>
        <Route path="/vehicle/save" element={<SaveVehicle/>}/>
        <Route path="/vehicle/update/:id" element={<EditVehicle/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/customer/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
