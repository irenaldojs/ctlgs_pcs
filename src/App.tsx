import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';

import BottomMenu from './layout/BottomMenu';
import Header from './layout/Header';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <div className="main flex-grow-1 d-flex flex-row">
        <Navbar />
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
}

export default App;
