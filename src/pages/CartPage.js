import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cart_context';
import styled from 'styled-components';
import { formatPrice } from '../components/Product';

function CartPage() {
  const { cart, amount, clearCart, total_items, subtotal } = useCartContext();
  if (cart.length === 0) {
    return (
      <Wrapper>
        <div className="cart-container">
          <Link to="/products" className="btn">
            Back To Products
          </Link>
          <div class="cart-header">
            <h3 class="cart-title">Your cart is empty</h3>
            <Link to={'/products'} className="btn">
              Back To Products
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="cart-container">
        <div class="cart-header">
          <h3 class="cart-title">Shopping Cart</h3>

          <button className="btn clear-btn" onClick={clearCart}>
            Remove All
          </button>
        </div>
        <div class="cart-items">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <hr />

        <div class="checkout">
          <div class="total">
            <div>
              <div class="Subtotal">
                <h3>Subtotal</h3>
              </div>
              <div class="num-of-items">{total_items} items</div>
            </div>
            <div class="total-amount">
              <h3>{formatPrice(subtotal)}</h3>
            </div>
          </div>
          <button class="btn checkout-btn">Checkout</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default CartPage;

const Wrapper = styled.main`
  ${'' /* height: 100vh; */}
  display: flex;
  justify-content: center;
  align-items: center;

  .back-to-products {
  }
  .cart-container {
    min-height: 80vh;
    height: 85%;
    width: 70%;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 25px 40px #41414133;
    margin: 20px 0;
  }
  .cart-header {
    margin: auto;
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-title {
    font-weight: 700;
    color: #088178;
  }
  .clear-btn {
  }
  .cart-items {
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .subtitle {
  }
  .counter {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .increase-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    margin: 5px;
  }
  .amount {
  }
  hr {
    width: 66%;
    float: right;
    margin-right: 5%;
  }
  .checkout {
    float: right;
    margin-right: 5%;
    margin-top: 14px;
    width: 28%;
  }
  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .Subtotal {
    font-size: 22px;
  }
  .num-of-items {
    font-size: 16px;
    font-weight: 500;
    color: #909090;
    line-height: 10px;
  }
  .total-amount {
  }
  .checkout-btn {
    margin: 14px 0 18px 0;
    width: 100%;
  }
`;
