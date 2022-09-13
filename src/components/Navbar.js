import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { BsHandbag, BsPerson } from 'react-icons/bs';
import { useCartContext } from '../context/cart_context';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';

export const menuList = [
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
];

function Navbar() {
  const { openSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <NavContainer>
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/">
            <h4 className="logo">Surf's App</h4>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {menuList.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="cart-btn-wrapper">
          <Link to="/cart" className="cart-btn">
            <span className="cart-btn-container">
              <BsHandbag />
              <span className="cart-value">{total_items}</span>
            </span>
          </Link>
          <button type="button" className="auth-btn">
            <BsPerson />
          </button>
        </div>
      </div>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  .nav-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 10rem;
    font-family: 'Rock Salt', 'cursive';
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
          color: #5584ac;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      width: 90px;
    }
    .cart-btn {
      display: flex;
      align-items: center;
    }
    .cart-btn-container {
      display: flex;
      align-items: center;
      position: relative;
      svg {
        height: 1.8rem;
        margin-left: 5px;
        font-size: 1.3rem;
      }
    }
    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: #5584ac;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: #fff;
      padding: 12px;
    }
    .auth-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border-color: transparent;
      cursor: pointer;

      svg {
        margin-left: 5px;
        height: 1.8rem;
        font-size: 1.5rem;
      }
    }
  }
`;
