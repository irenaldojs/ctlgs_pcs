import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import IframePage from '../layout/IframePage';
import Sidebar from '../layout/Sidebar';

function Catalogs() {
  const [sidebar, setSidebar] = useState(false);
  const [fixedHeight, setFixedHeight] = useState('');

  const { toggle } = useSelector((state) => state.select.sidebar);

  useEffect(() => {
    setSidebar(toggle);
  }, [toggle]);

  useEffect(() => {
    setFixedHeight(window.innerHeight - 60);
  }, [window.innerHeight]);

  return (
    <>
      <nav
        id="sidebar"
        className={`${
          sidebar ? 'd-flex' : 'd-none'
        } col-12 col-sm-3 col-md-2 d-sm-flex px-1 flex-column`}
        style={{ maxHeight: { fixedHeight } }}
      >
        <Sidebar />
      </nav>
      <div
        className={`${
          sidebar ? 'd-none' : 'd-block'
        } col-12 col-sm-9 col-md-10 d-sm-block p-1`}
      >
        <IframePage />
      </div>
    </>
  );
}

export default Catalogs;
