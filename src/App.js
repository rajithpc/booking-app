import Home from "./Pages/Home"
import "./Components/NavBar.css"
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "../src/Pages/Roompage"
import Roompage from "../src/Pages/Roompage";
import BookingPage from "./Pages/BookingPage";
import NewBookingPage from "./Pages/NewBookingPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Room" element={<Roompage/>}/>
        <Route path="/Booking" element={<BookingPage/>}/> 
        <Route path="/NewBookingPage" element={<NewBookingPage/>}/>
        </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
