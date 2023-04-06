import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './layout/Container';
import Header from './layout/Header';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="vh-100">
      <Header />
      <div className="main d-flex flex-row">
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

export default App;
