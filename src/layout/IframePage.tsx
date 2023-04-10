import { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
import { completedSite } from '../store/site-slice';

function IframePage() {
  const { href, load } = useSelector((state) => state.select.site);
  const [element, setElement] = useState(null);
  const dispath = useDispatch();

  useEffect(() => {
    setElement(
      <Iframe
        display={load ? 'none' : ''}
        src={href}
        onLoad={() => dispath(completedSite())}
        className="h-100 w-100"
      />,
    );
  }, [href, load]);
  return (
    <>
      {load && <Loading />}
      {element}
    </>
  );
}

export default IframePage;
