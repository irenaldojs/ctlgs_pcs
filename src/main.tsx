import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './About/index';
import App from './App';
import Catalogs from './Catalogs/index';
import Home from './Home/index';
import Pdfs from './Pdfs/index';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="catalogos" element={<Catalogs />} />
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pdfs" element={<Pdfs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
