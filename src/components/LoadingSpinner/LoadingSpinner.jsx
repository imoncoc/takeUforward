import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className='active fs-1 d-flex justify-content-center align-items-center'>
        L{" "}
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        oading
      </div>
    );
};

export default LoadingSpinner;