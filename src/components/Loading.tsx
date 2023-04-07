import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div className="w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center px-4">
      <div className="d-flex align-items-center justify-content-center w-100 color-skeleton mb-5 height-skeleton-1">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      <div className="d-flex w-100 gap-2 mb-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-25 color-skeleton height-skeleton-2" />
        ))}
      </div>
      <div className="d-flex w-100 flex-column gap-3">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-100 color-skeleton height-skeleton-1" />
        ))}
      </div>
    </div>
  );
}

export default Loading;
