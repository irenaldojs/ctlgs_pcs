import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  site: {
    title: '',
    href: '',
    sandbox: '',
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
        sandbox: action.payload.sandbox,
        load: true,
      };
    },
    completedSite: (state) => {
      state.site = {
        title: state.site.title,
        href: state.site.href,
        sandbox: state.site.sandbox,
        load: false,
      };
    },
    toggleSidebar: (state, action) => {
      state.sidebar.toggle = !state.sidebar.toggle;
      if (action.payload) {
        state.sidebar.toggle = action.payload.toggle;
        console.log('ação', action.payload.toggle);
      }
    },
  },
});

export const { swapSite, completedSite, toggleSidebar } = stateSlice.actions;
export const siteReducer = stateSlice.reducer;
