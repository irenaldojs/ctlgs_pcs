import './Layout.css';

import { catalogos } from '../listaCatalogos.js';

function Navbar({ setCurrentSite }) {
  const handleClick = (event) => {
    event.preventDefault();
    setCurrentSite(event.target.href);
  };

  return (
    <nav
      id="navbar"
      className="d-flex flex-column min-height-main bg-primary col-md-2 vh-100 "
    >
      {catalogos.map((item, index) => (
        <a
          className="item-link p-2 btn btn-primary"
          key={index}
          href={item.href}
          onClick={handleClick}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
