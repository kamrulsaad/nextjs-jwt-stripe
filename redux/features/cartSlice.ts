import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "@prisma/client";

interface CartSlice {
  product: Product;
  quantity: number;
}

const initialState: CartSlice = {
  product: {} as Product,
  quantity: 0,
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.quantity = 1;
    },
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 1) state.quantity -= 1;
    },
  },
});

export const { addToCart, increment, decrement } = productSlice.actions;

export const selectCount = (state: RootState) => state.cart.quantity;

export default productSlice.reducer;
