import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import products from '../data';

const ProductsContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  products: products,
  filtered_products: [],
  sort_products: 'price',
  filters: {
    search: '',
    category: 'all',
    price: 0,
    min_price: 0,
    max_price: 0,
    inStock: false,
  },
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [products, state.sort_products, state.filters]);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };
  const loadProducts = () => {
    dispatch({ type: 'LOAD_PRODUCTS' });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: 'UPDATE_SORT', payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'inStock') {
      value = e.target.checked;
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        loadProducts,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
