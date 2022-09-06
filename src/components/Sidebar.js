import React from 'react';
import styled from 'styled-components';

import { menuList } from './Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { BsHandbag, BsPerson } from 'react-icons/bs';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <h4 className="logo">Surf's App</h4>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {menuList.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {/*   <li>
            <Link to={'/'}>checkout</Link>
          </li> */}
        </ul>
        <div className="cart-btn-wrapper">
          <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
            <span className="cart-btn-container">
              <BsHandbag />
              <span className="cart-value">{total_items}</span>
            </span>
          </Link>
          <Link to="/cart" className="auth-btn" onClick={closeSidebar}>
            <BsPerson />
          </Link>
        </div>
      </aside>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.main`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .logo {
    width: 10rem;
    font-family: 'Rock Salt', 'cursive';
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    font-weight: 500;
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: #d7e9f7;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  .cart-btn-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 120px;
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
      font-size: 1.5rem;
    }
    svg:hover {
      font-size: 2rem;
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
      font-size: 1.8rem;
    }
    svg:hover {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
