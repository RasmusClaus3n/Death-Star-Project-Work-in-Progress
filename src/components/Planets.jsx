import React, { useState, useEffect } from 'react';
import CallApi from './CallPlanetApi';
import Planet from './Planet';
import NextAndBackArrows from './Arrows';

import TimeOutError from './TimeOutError';

const Planets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationLoading, setPaginationLoading] = useState(false);

  const PLANETS_URL = `https://swapi.dev/api/planets/?format=json&page=${currentPage}`;
  const { data: planetsData, loading, error } = CallApi(PLANETS_URL);

  const handleNextPage = () => {
    if (planetsData && planetsData.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
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

  if (loading) {
    return (
      <div className='loading-container'>
        <span className='loader'></span>
      </div>
    );
  }

  const planets = planetsData.results;
  const isPrevDisabled = currentPage === 1; // Disable previous arrow on first page
  const isNextDisabled = !planetsData.next; // Disable next arrow when there's no next page

  return (
    <>
      <div className='planets-container'>
        <section className='planets-content'>
          {planets.map((planet, index) => (
            <Planet key={index} {...planet} />
          ))}
        </section>
      </div>
      {/* Pagination */}
      <NextAndBackArrows
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
    </>
  );
};

export default Planets;
