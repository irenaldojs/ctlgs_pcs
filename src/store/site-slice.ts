import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  site: {
    title: '',
    href: '',
    load: false,
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
        load: true,
      };
    },
    completedSite: (state) => {
      state.site = {
        title: state.site.title,
        href: state.site.href,
        load: false,
      };
    },
  },
});

export const { swapSite, completedSite } = stateSlice.actions;
export const siteReducer = stateSlice.reducer;
