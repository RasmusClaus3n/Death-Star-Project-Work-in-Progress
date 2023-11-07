import React from 'react';
import { useParams } from 'react-router-dom';

import { CallSWAPI } from '../api/CallSWAPI';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';

import { formatPopulation } from '../utils/formatPopulation';
import { assignPlanetImg, assignFilmImgs } from '../utils/assignImagePaths';

const PlanetDetails = () => {
  const { planetName } = useParams();

  const PLANET_URL = `https://swapi.dev/api/planets/?search=${planetName}&format=json`;
  const { data: planetData, loading, error } = CallSWAPI(PLANET_URL);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMsg error={error} />;
  }

  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    residents,
    films,
  } = planetData.results[0];

  let formattedPopulation = formatPopulation(population);

  let terrainFirstWord = terrain?.split(',')[0].trim().toLowerCase();
  let planetImg = assignPlanetImg(terrainFirstWord);

  console.log(films);

  let filmImgs = assignFilmImgs(films);

  return (
    <main className='planet-dtls-container'>
      <div className='planet-dtls-content'>
        <div className='planet-header planet-dtls-card'>
          <img src={`/images/planets/${planetImg}`} alt='' />
          <h1 className='planet-name'>{name}</h1>
        </div>
        <section className='planet-dtls-stats'>
          <div className='population planet-dtls-card'>
            <img src='/images/planet-details/population.svg' alt='' />
            <h3>Population</h3>
            <h2>
              {formattedPopulation !== 'unknown'
                ? `${formattedPopulation}`
                : 'Unknown'}
            </h2>
          </div>
          <div className='climate planet-dtls-card'>
            <img src='/images/planet-details/climate.svg' alt='' />
            <h3>Climate</h3>
            <h2>{climate}</h2>
          </div>
          <div className='terrain planet-dtls-card'>
            <img src='/images/planet-details/terrain.svg' alt='' />
            <h3>Terrain</h3>
            <h2>{terrain}</h2>
          </div>
          <div className='surface-water planet-dtls-card'>
            <img src='/images/planet-details/surface_water.svg' alt='' />
            <h3>Surface Water</h3>
            <h2>
              {surface_water !== 'unknown' ? `${surface_water}%` : 'Unknown'}{' '}
            </h2>
          </div>
          <div className='diameter planet-dtls-card'>
            <img src='/images/planet-details/diameter.svg' alt='' />
            <h3>Diameter</h3>
            <h2>{diameter !== 'unknown' ? `${diameter} km` : 'Unknown'} </h2>
          </div>
          <div className='gravity planet-dtls-card'>
            <img src='/images/planet-details/gravity.svg' alt='' />
            <h3>Gravity</h3>
            <h2>{gravity}</h2>
          </div>
          <div className='rotation-period planet-dtls-card'>
            <img src='/images/planet-details/rotation_period.svg' alt='' />
            <h3>Rotation Period</h3>
            <h2>
              {rotation_period !== 'unknown'
                ? `${rotation_period} days`
                : 'Unknown'}{' '}
            </h2>
          </div>
          <div className='orbital-period planet-dtls-card'>
            <img src='/images/planet-details/orbital_period.svg' alt='' />
            <h3>Orbital Period</h3>
            <h2>
              {orbital_period !== 'unknown'
                ? `${orbital_period} days`
                : 'Unknown'}{' '}
            </h2>
          </div>
        </section>
        <section className='films-container'>
          <h1 className='sub-heading'>
            {films.length > 0 ? `Appears in` : ''}{' '}
          </h1>
          <div className='films-content'>
            {filmImgs.map((filmImg, index) => (
              <img
                key={index}
                src={`/images/logos/${filmImg}`}
                alt={`Film ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PlanetDetails;
