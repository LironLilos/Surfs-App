import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useGlobalContext } from '../components/Context';

export const cartItems = [
  {
    id: 1,
    name: 'SUP SURFTECH GENERATOR',
    category: 'sup',
    img: '/images/products/SUP SURFTECH GENERATOR.jpg',
    price: 720,
    countInStock: 1,
    rating: 4.5,
    numberOfReviews: 18,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl arcu, iaculis at sem et, vulputate consectetur magna. Integer nec nisi eu est semper aliquet at vel lectus. Proin malesuada turpis vel varius mollis. Ut hendrerit neque at turpis accumsan iaculis. Cras in ligula non dolor accumsan malesuada.',
    amount: 1,
  },
  {
    id: 2,
    name: 'SUP SURFTECH THE LIDO',
    category: 'sup',
    img: '/images/products/SUP SURFTECH THE LIDO.jpg',
    price: 200,
    countInStock: 2,
    rating: 5,
    numberOfReviews: 12,
    description: 'lorem ipsum',
    amount: 1,
  },
  {
    id: 3,
    name: 'SURFTECH DREAMLINER SURFBOARD',
    category: 'sup',
    img: '/images/products/SURFTECH DREAMLINER SURFBOARD.jpg',
    price: 720,
    countInStock: 2,
    rating: 4,
    numberOfReviews: 16,
    description: 'lorem ipsum',
    amount: 1,
  },
];
function CartPage() {
  const { cart, total, amount, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-container">
          <div class="cart-header">
            <h3 class="cart-title">Your cart is currently empty</h3>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="cart-page">
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
              <div class="num-of-items">{amount} items</div>
            </div>
            <div class="total-amount">
              <h3>${total}</h3>
            </div>
          </div>
          <button class="btn checkout-btn">Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
