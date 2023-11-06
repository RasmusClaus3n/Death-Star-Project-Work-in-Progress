import React from 'react';
import { assignPlanetImg } from '../utils/assignPlanetImg';

const Planet = ({ name, terrain, population }) => {
  let terrainFirstWord = terrain?.split(',')[0].trim().toLowerCase();

  let planetImg = assignPlanetImg(terrainFirstWord);

  return (
    <div className='planet-card'>
      <section className='planet-card-content'>
        <img
          className='planet-svg'
          src={`/images/planets/${planetImg}`}
          alt=''
        />
        <p className='planet-name'>{name ? name : 'Loading...'}</p>
      </section>
    </div>
  );
};

export default Planet;
