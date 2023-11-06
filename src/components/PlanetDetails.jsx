import React from 'react';
import { assignPlanetImg } from '../utils/assignPlanetImg';

const PlanetDetails = ({
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
}) => {
  return (
    <div className='planet-dtls-container'>
      <section className='planet-dtls-content'>
        <p>{rotation_period}</p>
        <p>{orbital_period}</p>
        <p>{diameter}</p>
        <p>{climate}</p>
        <p>{gravity}</p>
        <p>{terrain}</p>
        <p>{surface_water}</p>
        <p>{population}</p>
        <p>{residents}</p>
        <p>{films}</p>
        <p className='planet-name'>{name ? name : 'Loading...'}</p>
      </section>
    </div>
  );
};

export default PlanetDetails;
