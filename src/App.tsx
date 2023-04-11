import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Outlet } from 'react-router-dom';

import BottomMenu from './layout/BottomMenu';
import Header from './layout/Header';

function App() {
  return (
    <div className="app">
      <div className="header-app">
        <Header />
      </div>
      <div className="main-app d-flex">
        <Outlet />
      </div>
      <div className="bottom-menu-app">
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
