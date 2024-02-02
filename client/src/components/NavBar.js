import logo from '../pictures/logo.png';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';

export default function NavBar(props) {
    return (
        <header className='background'>
          <div className='logo'>
            <img
              className="logo-img" src={logo} alt="BigAtHeart" width="175px"
            />
          </div>
          <div className='content header'>
            <nav >
                <ul>
                  <li>
                    <Link to="/" className='nav-bar'>Home</Link>
                  </li>
                  <li>
                    <Link to="/upcoming-events" className='nav-bar'>Upcoming Events</Link>
                  </li>
                  <li>
                    <Link to="/past-events">Past Events</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/sign-in">Sign In/Up</Link>
                  </li>
                </ul>
              </nav>
          </div>
            
        </header>
      );
}


