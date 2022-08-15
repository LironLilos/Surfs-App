import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const menuList = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'live beach cam',
    url: '/beachcam',
  },
  {
    id: 4,
    text: 'about',
    url: '/about',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact',
  },
];

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const { amount } = useGlobalContext();

  return (
    <section className="header">
      <Link to="/">
        <h4 className="logo">Surf's App</h4>
      </Link>

      <div>
        <ul className={showNavbar ? 'menu-list' : 'menu-list close'}>
          {menuList.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {showNavbar ? (
            <li>
              <FaTimes
                className="fatimes"
                onClick={() => setShowNavbar(false)}
              />
            </li>
          ) : (
            <li>
              <Link to={'/registration'}>
                <FaRegUser />
              </Link>
              <Link to={'/cart'} className="cart-btn">
                <FaShoppingCart />
                <p>{amount}</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="menu-icon">
        <Link to={'/registration'}>
          <FaRegUser />
        </Link>
        <Link to={'/cart'}>
          <FaShoppingCart />
        </Link>

        <div onClick={() => setShowNavbar(!showNavbar)}>
          {showNavbar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
