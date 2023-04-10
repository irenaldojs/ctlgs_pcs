import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ButtonItem from '../components/ButtonItem';
import { toggleSidebar } from '../store/site-slice';

function BottomMenu() {
  const dispath = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-primary d-flex align-items-center justify-content-around text-light`}
    >
      <ButtonItem icon={<i className="bi bi-house" />} onClick={() => navigate('/')} />
      <ButtonItem
        icon={<i className="bi bi-book" />}
        onClick={() => dispath(toggleSidebar())}
      />
    </div>
  );
}

export default BottomMenu;
