const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, amount, product } = action.payload;

    const tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;
          if (newAmount > item.countInStock) {
            newAmount = item.countInStock;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.name,
        img: product.img,
        price: product.price,
        countInStock: product.countInStock,
        amount,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === 'INCREASE_ITEM') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        let newAmount = cartItem.amount + 1;
        if (newAmount > cartItem.countInStock) {
          newAmount = cartItem.countInStock;
        }
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === 'DECREASE_ITEM') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          let newAmount = cartItem.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === 'GET_CART_TOTALS') {
    const { total_items, subtotal } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;

        total.total_items += amount;
        total.subtotal += price * amount;
        return total;
      },
      { total_items: 0, subtotal: 0 }
    );
    return { ...state, subtotal, total_items };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
