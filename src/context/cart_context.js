import React, { useContext, useEffect, useReducer, useState } from 'react';
import { cartItems } from '../pages/CartPage';
import reducer from '../reducers/cart_reducer';

const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
