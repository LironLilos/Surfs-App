import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pay from '../assets/pay.png';
import googleplay from '../assets/google-play.jpg';
import appstore from '../assets/app-store.jpg';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper className="section-padding">
      <div className="footer-colomn">
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 7272C Evergreen Ave. Hawaii 33952
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
            <Link to={'/'}>
              <FaFacebookF />
            </Link>
            <Link to={'/'}>
              <FaTwitter />
            </Link>
            <Link to={'/'}>
              <FaInstagram />
            </Link>
            <Link to={'/'}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-colomn">
        <h4>About</h4>
        <Link to={'/'}>About Us</Link>
        <Link to={'/'}>Delivery Information</Link>
        <Link to={'/'}>Privacy Policy</Link>
        <Link to={'/'}>Contact Us</Link>
      </div>
      <div className="footer-colomn ">
        <h4>My Account</h4>
        <Link to={'/'}>Sign In</Link>
        <Link to={'/'}>View Cart</Link>
        <Link to={'/'}>Track Order</Link>
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
          &copy; {new Date().getFullYear()} Surf's App. All Rights Reserved.
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ececec;

  .footer-colomn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .logo {
    margin-bottom: 30px;
  }
  h4 {
    font-size: 16px;
    padding-bottom: 20px;
  }
  p {
    font-size: 15px;
    margin: 0 0 8px 0;
  }
  a {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .follow {
    margin-top: 20px;
  }
  svg {
    fill: #5584ac;
    margin-right: 1rem;
    font-size: 1rem;
  }
  svg:hover,
  footer a:hover {
    fill: #d7e9f7;
  }

  .pay {
    padding-top: 1rem;
  }
  .copyright {
    width: 100%;
    text-align: center;
  }
  .install-btn img {
    margin: 0 5px 10px 0;
    border: 1px solid #465b52;
    border-radius: 5px;
  }
`;
