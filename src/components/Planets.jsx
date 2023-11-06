import React, { useState, useEffect } from 'react';
import CallSWAPI from './CallSWAPI';
import Planet from './Planet';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';
import NextAndBackArrows from './Arrows';
import PlanetDetails from './PlanetDetails';

const Planets = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const PLANETS_URL = `https://swapi.dev/api/planets/?format=json&page=${currentPage}`;
  const { data: planetsData, loading, error } = CallSWAPI(PLANETS_URL);

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
    return <ErrorMsg error={error} />;
  }

  if (loading) {
    return <Loader />;
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
