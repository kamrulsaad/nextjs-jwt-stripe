import { baseApi } from "./api/baseApi";
import cartSlice from "./features/cartSlice";

export const reducer = {
  cart: cartSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
