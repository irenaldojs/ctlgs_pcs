import { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
import Home from '../Home';
import { completedSite } from '../store/site-slice';

function Container() {
  const { href, load } = useSelector((state) => state.select.site);
  const [element, setElement] = useState(false);

  const dispath = useDispatch();

  useEffect(() => {
    setElement(
      <Iframe
        display={load ? 'none' : 'block'}
        className="w-100 flex-grow-1"
        src={href}
        onLoad={() => dispath(completedSite())}
      />,
    );
  }, [href, load]);

  return (
    <>
      {load && <Loading />}
      {href !== '' && element}
      {href === '' && <Home />}
    </>
  );
}

export default Container;
