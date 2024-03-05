import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    setToken: (state: string, action: PayloadAction<string>) => {
      sessionStorage.setItem("token", action.payload);
      state=action.payload
      return state;
    },
    removeToken: () => {
      sessionStorage.removeItem("token");
      return "";
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
