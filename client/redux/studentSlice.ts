import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Istudent } from "@/interfaces/Istudent";

export interface studentState {
  value: Array<Istudent>;
}

const initialState = {
  value: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    changeStudents: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { changeStudents } = studentSlice.actions;

export default studentSlice.reducer;
