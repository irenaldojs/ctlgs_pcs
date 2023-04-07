import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './layout/Container';
import Header from './layout/Header';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <div className="main h-100 flex-grow-1 d-flex flex-row">
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

export default App;
