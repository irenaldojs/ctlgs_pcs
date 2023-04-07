import './Layout.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { catalogos } from '../listaCatalogos.js';
import { swapSite } from '../store/site-slice';

function Navbar() {
  const dispath = useDispatch();
  const [indexPage, setIndexPage] = useState('');

  function handleClick({ title, href }, index) {
    dispath(swapSite({ title, href }));
    setIndexPage(index);
  }

  return (
    <nav id="navbar" className="d-flex flex-column min-height-main col-md-2">
      {catalogos.map((item, index) => (
        <button
          className={`item-link p-2 btn ${
            index === indexPage ? 'btn-secondary' : 'btn-light'
          } ${item.newTab ? 'newTab' : ''} border-radius-none`}
          key={index}
          onClick={() => {
            if (item.newTab) {
              window.open(item.href, '_blank');
            } else {
              handleClick(item, index);
            }
          }}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
