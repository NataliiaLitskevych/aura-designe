import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = existingItem.quantity * action.payload.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.price 
        });
      }
      
      state.totalPrice = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.itemId
      );
      
      state.totalPrice = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    }
  }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export const getTotalPrice = state => state.cart.totalPrice;
export default cartSlice.reducer;