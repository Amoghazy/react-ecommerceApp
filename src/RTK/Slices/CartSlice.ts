import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProduct from "../../types/IProduct";
import { Icart } from "../../types/ISTATE";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Array<Icart>,
  reducers: {
    addToCart: (state: Icart[], action: PayloadAction<IProduct>) => {
      console.log(state);
      console.log("insidecart");
      const item: Icart | undefined = state.find(
        (el) => el.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
        return state;
      } else {
        const product: Icart = {
          id: action.payload?.id,
          title: action.payload?.title,
          price: action.payload?.price,
          image: action.payload?.image,
          quantity: 1,
        };

        return [...state, { ...product }];
      }
    },
    removeFromCart: (state: Icart[], action: PayloadAction<Icart>) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
