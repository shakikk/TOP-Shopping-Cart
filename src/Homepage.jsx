import './App.css';
import Navbar from './components/Navbar';
import Cafe from "./assets/cafe.png";
import { Link } from 'react-router';

function Homepage() {
  return (
    <div className="homepage-container" style={{backgroundImage: `url(${Cafe})`}}>
      <Navbar/>
      <div className="homepage-content">
        <p> Discover the World’s Most Unique Coffee Beans </p>
        <p> Crafted for the Bold, the Curious, and the True Coffee Lovers. </p>
        <p> Taste coffee like never before. </p>
        <Link to="/Products" id="shop-now-btn"> Explore the Beans </Link>
      </div>
    </div>
  )
}

export default Homepage;
