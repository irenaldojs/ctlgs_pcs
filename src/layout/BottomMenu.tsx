import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ButtonItem from '../components/ButtonItem';
import { toggleSidebar } from '../store/site-slice';

function BottomMenu() {
  const dispath = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-primary d-flex align-items-center justify-content-around text-light h-100`}
    >
      <ButtonItem
        title={'Inicio'}
        icon="bi-house"
        onClick={() => {
          dispath(toggleSidebar({ toggle: false }));
          navigate('/');
        }}
      />
      <ButtonItem
        title={'Catálogos'}
        icon="bi-book"
        onClick={() => {
          dispath(toggleSidebar());
          navigate('/catalogos');
        }}
      />
      <ButtonItem
        title={'Pdfs'}
        icon="bi-file-pdf"
        onClick={() => {
          dispath(toggleSidebar({ toggle: false }));
          navigate('/pdfs');
        }}
      />
      <ButtonItem
        title={'Sobre'}
        icon="bi-person-vcard"
        onClick={() => {
          dispath(toggleSidebar({ toggle: false }));
          navigate('/about');
        }}
      />
    </div>
  );
}

export default BottomMenu;
