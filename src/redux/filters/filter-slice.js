import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    settedFilter: (_, { payload }) => payload
  },
});

export default filterSlice.reducer;

