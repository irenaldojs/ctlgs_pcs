import { BookIcon, HomeIcon } from '../components/Icons';
function BottomMenu() {
  return (
    <div className="bottom-menu col-12 bg-primary p-2 d-flex align-items-center justify-content-around d-md-none text-light">
      <HomeIcon />
      <BookIcon />
    </div>
  );
}

export default BottomMenu;
