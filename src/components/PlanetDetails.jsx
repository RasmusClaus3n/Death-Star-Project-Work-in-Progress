import React from 'react';
import { useParams } from 'react-router-dom';
import CallSWAPI from './CallSWAPI';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';

const PlanetDetails = () => {
  const { id } = useParams();

  const PLANET_URL = `https://swapi.dev/api/planets/${id}/`;
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
  } = planetData;

  return (
    <div className='planet-dtls-container'>
      <section className='planet-dtls-content'>
        <p>Name: {name}</p>
        <p>Rotation Period: {rotation_period}</p>
        <p>Orbital Period: {orbital_period}</p>
        <p>Diameter: {diameter}</p>
        <p>Climate: {climate}</p>
        <p>Gravity: {gravity}</p>
        <p>Terrain: {terrain}</p>
        <p>Surface Water: {surface_water}</p>
        <p>Population: {population}</p>
        <p>Residents: {residents.join(', ')}</p>
        <p>Films: {films.join(', ')}</p>
      </section>
    </div>
  );
};

export default PlanetDetails;
