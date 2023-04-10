import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  site: {
    title: '',
    href: '',
    load: false,
  },
  sidebar: {
    toggle: false,
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
    toggleSidebar: (state) => {
      state.sidebar.toggle = !state.sidebar.toggle;
      console.log('chamou', state.sidebar.toggle);
    },
  },
});

export const { swapSite, completedSite, toggleSidebar } = stateSlice.actions;
export const siteReducer = stateSlice.reducer;
