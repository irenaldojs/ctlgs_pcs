import './Layout.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div
      className={`bg-primary text-light p-1 d-flex align-items-center justify-content-center h-100 fs-3 gap-3`}
    >
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/">
          Inicio
        </Link>
      </div>
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/catalogos">
          Catalogos
        </Link>
      </div>
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/pdfs">
          Pdfs
        </Link>
      </div>
      <div className="ms-3 item-link-header">
        <Link className="text-light" to="/about">
          Sobre
        </Link>
      </div>
    </div>
  );
}

export default Header;
