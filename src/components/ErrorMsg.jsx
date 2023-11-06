const ErrorMsg = ({ error }) => {
  const errorMessage = error.message || 'An unknown error occurred.';

  return (
    <div className='error-message'>
      <img src='/images/icons/error.svg' alt='' />
      <p>Error: {errorMessage}</p>
      <p>
        SWAPI might be overloaded at the moment. Please refresh the browser or
        try again later.
      </p>
    </div>
  );
};

export default ErrorMsg;
