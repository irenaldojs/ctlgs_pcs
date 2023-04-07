import './Layout.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-primary text-light p-1 align-items-center justify-content-center d-none d-md-flex">
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/">
          Inicio
        </Link>
      </div>
      <h1 className="text-center flex-grow-1">Lista de Catálogos</h1>
    </div>
  );
}

export default Header;
