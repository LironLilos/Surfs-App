import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pay from '../assets/pay.png';
import googleplay from '../assets/google-play.jpg';
import appstore from '../assets/app-store.jpg';

function Footer() {
  return (
    <footer className="footer section-padding">
      <div className="footer-colomn">
        {/* <h3 className="logo">Surf's App</h3> */}
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 7272C Evergreen Ave. Port Charlotte, FL
          33952
        </p>
        <p>
          <strong>Phone: </strong> 917-737-0198
        </p>
        <p>
          <strong>Hours: </strong> 09:00-18:00, Sun-Thu
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to={'/about'}>
              <FaFacebookF />
            </Link>
            <Link to={'/about'}>
              <FaTwitter />
            </Link>
            <Link to={'/about'}>
              <FaInstagram />
            </Link>
            <Link to={'/about'}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-colomn">
        <h4>About</h4>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/about'}>Delivery Information</Link>
        <Link to={'/about'}>Privacy Policy</Link>
        <Link to={'/about'}>Contact Us</Link>
      </div>
      <div className="footer-colomn ">
        <h4>My Account</h4>
        <Link to={'/about'}>Sign In</Link>
        <Link to={'/about'}>View Cart</Link>
        <Link to={'/about'}>Track Order</Link>
      </div>
      <div className="footer-colomn install">
        <h4>Install App</h4>
        <div className="install-btn">
          <img src={googleplay} alt="google play"></img>
          <img src={appstore} alt="payment"></img>
        </div>
        <p className="pay">Secured Payment Gateways</p>
        <img src={pay} alt="payment"></img>
      </div>
      <div className="copyright">
        <p>
          {/*   <FaRegCopyright /> */}
          &copy; {new Date().getFullYear()} Surf's App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
