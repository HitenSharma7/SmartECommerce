import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number | string;
  title: string;
  imageURL: string;
  qty: number;
  total: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    // addItemToCart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          total: action.payload.price,
        });
      }
    },

    // removeItemFromCart
    removeItemFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem && existingItem.qty !== 1) {
        existingItem.qty -= 1;
        existingItem.total -= action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    // removeProductFromCart
    removeProductFromCart: (state, action) => {
      state.items=state.items.filter((item) => item.id !== action.payload.id);
    },

    // emptyCart
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;