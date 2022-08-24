import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';

const CartContext = React.createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  subtotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE_ITEM', payload: id });
  };
  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE_ITEM', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_CART_TOTALS' });
  }, [state.cart]);

  //Local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
