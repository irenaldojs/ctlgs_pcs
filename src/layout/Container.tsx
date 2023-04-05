import { useEffect, useState } from 'react';

import Home from '../home';

function Container({ currentSite }) {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(currentSite);
  }, [currentSite]);

  return (
    <div className="bg-dark w-100 vh-100">
      {current && <iframe className="h-100 w-100" title="element" src={current} />}
      {!current && <Home />}
    </div>
  );
}

export default Container;
