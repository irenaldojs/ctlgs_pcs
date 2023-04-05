import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Container from './layout/Container';
import Header from './layout/Header';
import Navbar from './layout/Navbar';

function App() {
  const [currentSite, setCurrentSite] = useState(null);

  return (
    <div className="vh-100">
      <Header />
      <div className="main d-flex flex-row">
        <Navbar setCurrentSite={setCurrentSite} />
        <Container currentSite={currentSite} />
      </div>
    </div>
  );
}

export default App;
