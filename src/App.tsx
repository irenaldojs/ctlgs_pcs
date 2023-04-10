import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import BottomMenu from './layout/BottomMenu';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

function App() {
  const { toggle } = useSelector((state) => state.select.sidebar);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setSidebar(toggle);
    console.log('troca', sidebar);
  }, [toggle]);
  return (
    <div className="app vh-100 d-flex flex-column">
      <div className="header-app d-none d-sm-block">
        <Header />
      </div>
      <div className="main-app d-flex flex-grow-1 overflow-auto">
        <div
          id="sidebar"
          className={`${
            sidebar ? 'd-block' : 'd-none'
          } col-12 col-sm-2 d-sm-block overflow-auto px-1`}
        >
          <Sidebar />
        </div>
        <div
          id="container"
          className={`${sidebar ? 'd-none' : 'd-block'} col-12 col-sm-10 d-sm-block`}
        >
          <Outlet />
        </div>
      </div>
      <div className="bottom-app d-block d-sm-none">
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
