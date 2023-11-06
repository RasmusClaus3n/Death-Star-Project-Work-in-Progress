import React from 'react';

export default function TimeOutError(error) {
  return (
    <div className='error-message'>
      <img src='/images/icons/error.svg' alt='' />
      <p>Error: {error.message}</p>
      <p>
        SWAPI has a lot of request each day. Please refresh the browser or try
        again later.
      </p>
    </div>
  );
}
