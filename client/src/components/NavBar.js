import logo from '../pictures/logo.png';
import { Link } from 'react-router-dom';
// import '../components/NavBar.css';

const divStyle = {
  backgroundColor: "#F7CAD0"
};

export default function NavBar(props) {
    return (
      <div className="flex flex-row justify-between items-start py-6 text-3xl font-bold text-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:pr-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/430714c7fd113023ccba7f974dbdb11cfb3e711ef18ed49758fe59ae972c6a2f?apiKey=0cba06582df446a9859eb90c47a74d7f&"
          className="max-w-full aspect-[1.47] w-[200px]"
        />
        <div className="flex flex-row flex-1 justify-center items-end px-16 py-8 mt-6 bg-rose-200 rounded-[50px] max-md:px-5 max-md:max-w-full">
          <nav className="flex justify-between max-w-full w-[944px] max-md:flex-wrap max-md:mr-2.5">
            <ul className="flex-row">
              <li className='flex-row float-left inline pr-6'>
                <Link  to="/hack4good">Home</Link>
              </li>
              <li className='flex-row float-left inline pr-6'>
                <Link to="/upcoming-events">Upcoming Events</Link>
              </li>
              <li className='flex-row float-left inline pr-6'>
                <Link  to="/past-events">Past Events</Link>
              </li>
              <li className='flex-row float-left inline pr-6'>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className='flex-row float-left inline'>
                <Link to="/Login">Sign In/Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        // <header className='background'>
        //   <div className='logo'>
        //     <img
        //       className="logo-img" src={logo} alt="BigAtHeart" width="175px"
        //     />
        //   </div>
        //   <div className='content header' style={divStyle}>
        //     <nav className='place-items-end text-right flex-end'>
        //         <ul>
        //           <li>
        //             <Link to="/hack4good" className='nav-bar'>Home</Link>
        //           </li>
        //           <li>
        //             <Link to="/upcoming-events" className='nav-bar'>Upcoming Events</Link>
        //           </li>
        //           <li>
        //             <Link to="/past-events">Past Events</Link>
        //           </li>
        //           <li>
        //             <Link to="/contact-us">Contact Us</Link>
        //           </li>
        //           <li>
        //             <Link to="/Login">Sign In/Up</Link>
        //           </li>
        //         </ul>
        //       </nav>
        //   </div>
            
        // </header>
      );
}


