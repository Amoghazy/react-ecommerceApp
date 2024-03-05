import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IProduct from "../../types/IProduct";
const productsSlice = createSlice({
  name: "products",
  initialState: [] as Array<IProduct>,
  reducers: {
    getAllProducts: (state: IProduct[], action: PayloadAction<IProduct[]>) => {
      state=action.payload
      return state;
    },
  },
});
export const { getAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
