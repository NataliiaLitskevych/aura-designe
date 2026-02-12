// redux/cartSlice.js
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
        // Якщо товар вже є, додаємо нову кількість до існуючої
        existingItem.quantity += action.payload.quantity;
        // ВАЖЛИВО: множимо загальну кількість на ОДИНИЧНУ ціну товару
        existingItem.totalPrice = existingItem.quantity * action.payload.price;
      } else {
        // Якщо товару немає, додаємо новий об'єкт
        state.cartItems.push({
          ...action.payload,
          // Розраховуємо ціну для поточної партії товару
          totalPrice: action.payload.quantity * action.payload.price 
        });
      }
      
      // Перераховуємо загальну суму всього кошика
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