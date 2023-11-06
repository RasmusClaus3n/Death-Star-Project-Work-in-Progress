import React from 'react';

const NextAndBackArrows = ({
  handlePrevPage,
  handleNextPage,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <div className='arrows-container'>
      {!isPrevDisabled && (
        <img
          className='previous-arrow rotate-180'
          src='/images/icons/arrow.svg'
          alt=''
          onClick={handlePrevPage}
        />
      )}
      {!isNextDisabled && (
        <img
          className='next-arrow'
          src='/images/icons/arrow.svg'
          alt=''
          onClick={handleNextPage}
        />
      )}
    </div>
  );
};

export default NextAndBackArrows;
