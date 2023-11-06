import React from 'react';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <section className='landing-page-content'>
        <img
          className='death-star-svg'
          id='death-star-svg'
          alt='Death Star'
          src='/images/sw-vector/death-star.svg'
        />
        <div className='txt-btn'>
          <span className='lp-text'>
            <h1 className='death-star-txt' id='death-star-txt'>
              The Death Star
            </h1>
            <h2 className='quick-sol-txt' id='quick-sol-txt'>
              Quick solutions to complicated problems
            </h2>
          </span>
          <button className='get-started-btn' id='get-started-btn'>
            <p>Get Started</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
