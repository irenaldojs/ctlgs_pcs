import './ButtonItem.css';

function ButtonItem({ title, icon, onClick }) {
  return (
    <div className="h-100 w-25 d-flex justify-content-center px-2 py-1">
      <button
        className="d-flex flex-column align-items-center justify-content-start btn btn-primary p-0 w-100"
        onClick={() => onClick()}
      >
        <i className={`button-icon bi ${icon}`} />
        <span className="button-title">{title}</span>
      </button>
    </div>
  );
}

export default ButtonItem;
