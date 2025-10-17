import './App.css';
import Navbar from './components/Navbar';
import Cafe from "./assets/cafe.png";
import { Link } from 'react-router';

function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar/>
      <div className="homepage-content">
        <img src={Cafe} id="cafe-image"/>
        <p> Discover the World’s Finest Coffee Beans — Crafted for the Bold, the Curious, and the True Coffee Lovers. </p>
        <p> From rare single-origin treasures to rich everyday blends — taste coffee like never before. </p>
        <Link to="/Products" id="shop-now-btn"> Explore the Beans </Link>
      </div>
    </div>
  )
}

export default Homepage;
