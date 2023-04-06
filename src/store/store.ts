import { configureStore } from '@reduxjs/toolkit';

import { siteReducer } from './site-slice';

export const store = configureStore({
  reducer: {
    select: siteReducer,
  },
});
