import './Layout.css';

import { useDispatch } from 'react-redux';

import { catalogos } from '../listaCatalogos.js';
import { swapSite } from '../store/site-slice';

function Navbar() {
  const dispath = useDispatch();

  function handleClick({ title, href }) {
    dispath(swapSite({ title, href }));
  }

  return (
    <nav
      id="navbar"
      className="d-flex flex-column min-height-main bg-primary col-md-2 vh-100 "
    >
      {catalogos.map((item, index) => (
        <button
          className="item-link p-2 btn btn-primary"
          key={index}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
