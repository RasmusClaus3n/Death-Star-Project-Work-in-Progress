const ErrorMsg = (error) => {
  return (
    <div className='error-message'>
      <img src='/images/icons/error.svg' alt='' />
      <p>Error: {error.message}</p>
      <p>
        SWAPI might be overflowed at the moment. Please refresh the browser or
        try again later.
      </p>
    </div>
  );
};

export default ErrorMsg;
