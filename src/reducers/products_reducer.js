import products from '../data';

const products_reducer = (state, action) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === 'LOAD_PRODUCTS') {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === 'UPDATE_SORT') {
    return {
      ...state,
      sort_products: action.payload,
    };
  }
  if (action.type === 'SORT_PRODUCTS') {
    const { sort_products, filtered_products } = state;
    let tempProducts = [...filtered_products];

    if (sort_products === 'price') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort_products === 'name') {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === 'FILTER_PRODUCTS') {
    const { search, category, price, inStock } = state.filters;

    let tempProducts = [...products];

    //filtering- search
    if (search) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLocaleLowerCase().startsWith(search);
      });
    }
    //filtering-category
    if (category !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category;
      });
    }
    //filtering-price
    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });
    //filtering- inStock
    if (inStock === true) {
      tempProducts = tempProducts.filter((product) => {
        return product.countInStock > 0;
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        search: '',
        category: 'all',
        price: state.filters.max_price,
        inStock: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" -action type`);
};

export default products_reducer;
