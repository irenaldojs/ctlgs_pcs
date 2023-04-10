function ButtonItem({ icon, onClick }) {
  return (
    <>
      <button className="btn btn-primary h-100 fs-2" onClick={() => onClick()}>
        {icon}
      </button>
    </>
  );
}

export default ButtonItem;
