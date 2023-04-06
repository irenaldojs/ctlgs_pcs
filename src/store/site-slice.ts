import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  site: {
    title: '',
    href: '',
  },
};

export const stateSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    swapSite: (state, action) => {
      state.site = {
        title: action.payload.title,
        href: action.payload.href,
      };
    },
  },
});

export const { swapSite } = stateSlice.actions;
export const siteReducer = stateSlice.reducer;
