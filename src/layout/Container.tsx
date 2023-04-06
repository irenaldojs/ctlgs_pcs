import { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import { useSelector } from 'react-redux';

import Home from '../Home';

function Container() {
  const { href } = useSelector((state) => state.select.site);
  const [url, setUrl] = useState(false);

  useEffect(() => {
    setUrl(href);
  });

  return (
    <>
      {url && <Iframe className="w-100 flex-grow-1" src={url} />}
      {!url && <Home />}
    </>
  );
}

export default Container;
