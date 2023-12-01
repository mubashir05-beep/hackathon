// menuSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface MenuOption {
  value: boolean;
}

const initialState: MenuOption = {
  value: false,
};

const menuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggleOption: (state) => {
      state.value = !state.value;
     
    },
  },
});

export const { toggleOption } = menuSlice.actions;
export default menuSlice.reducer;
