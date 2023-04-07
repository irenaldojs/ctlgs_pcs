import './Layout.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { catalogos } from '../listaCatalogos.js';
import { swapSite } from '../store/site-slice';

function Navbar() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [indexPage, setIndexPage] = useState('');

  function handleClick({ title, href }, index) {
    dispath(swapSite({ title, href }));
    setIndexPage(index);
  }

  return (
    <nav id="navbar" className="d-flex flex-column col-12 col-md-2 p-1">
      {catalogos.map((item, index) => (
        <button
          key={index}
          className={`item-link p-2 btn ${
            index === indexPage ? 'btn-secondary' : 'btn-light'
          } ${item.newTab ? 'newTab' : ''} border-radius-none`}
          onClick={() => {
            if (item.newTab) {
              window.open(item.href, '_blank');
            } else {
              handleClick(item, index);
              navigate('/catalogo');
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
