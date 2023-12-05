import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionState {
  value: number;
}

const initialState: OptionState = {
  value: 1,
};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    nextOption: (state, ) => {
      state.value += 1;
    },
    prevOption: (state) => {
      state.value -=1;
    },
  },
});

export const { setOption,nextOption,prevOption } = optionSlice.actions;
export default optionSlice.reducer;
