import { ADD_TO_CART, SET_PRODUCTS, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../actions/actions";

const initialState = {
    products: [],
    filters: { gender: '', colour: '', price: '', type: '' },
    cartItems: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return { ...state, products: action.payload, filteredProducts: action.payload };
      case ADD_TO_CART:
        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
          return { ...state, cartItems: [...state.cartItems] };
        } else {
          return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
        }
      case REMOVE_FROM_CART:
        return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
      case UPDATE_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: action.payload.quantity };
            } else {
              return item;
            }
          })
        };
      default:
        return state;
    }
  };