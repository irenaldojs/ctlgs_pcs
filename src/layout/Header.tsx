import './Layout.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div
      className={`bg-primary text-light p-1 d-flex align-items-center justify-content-center`}
    >
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/">
          Inicio
        </Link>
      </div>
      <p className="text-center flex-grow-1">Lista de Catálogos</p>
    </div>
  );
}

export default Header;
