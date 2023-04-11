import './Layout.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { catalogos } from '../listaCatalogos.js';
import { swapSite, toggleSidebar } from '../store/site-slice';

function Sidebar() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [indexPage, setIndexPage] = useState('');

  function handleClick({ title, href, sandbox }, index) {
    dispath(swapSite({ title, href, sandbox }));
    dispath(toggleSidebar());
    setIndexPage(index);
  }

  return (
    <>
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
              navigate('/catalogos');
            }
          }}
        >
          {item.title}
        </button>
      ))}
    </>
  );
}

export default Sidebar;
