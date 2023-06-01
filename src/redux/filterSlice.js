import { createSlice } from '@reduxjs/toolkit';
// import initialState from 'data/initial-state';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
