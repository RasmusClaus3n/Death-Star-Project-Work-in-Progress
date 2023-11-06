import React from 'react';

const Planet = ({ name, terrain }) => {
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

function assignPlanetImg(terrainFirstWord) {
  let terrainImage = 'nebula.svg';

  if (
    terrainFirstWord === 'swamp' ||
    terrainFirstWord === 'forests' ||
    terrainFirstWord === 'jungles' ||
    terrainFirstWord === 'grasslands' ||
    terrainFirstWord === 'grassy hills' ||
    terrainFirstWord === 'plains' ||
    terrainFirstWord === 'urban' ||
    terrainFirstWord === 'swamps' ||
    terrainFirstWord === 'rainforests'
  ) {
    terrainImage = 'earth.svg';
  } else if (
    terrainFirstWord === 'tundra' ||
    terrainFirstWord === 'ocean' ||
    terrainFirstWord === 'glaciers' ||
    terrainFirstWord === 'oceans' ||
    terrainFirstWord === 'rocky islands'
  ) {
    terrainImage = 'circle.svg';
  } else if (
    terrainFirstWord === 'desert' ||
    terrainFirstWord === 'deserts' ||
    terrainFirstWord === 'rock' ||
    terrainFirstWord === 'scrublands' ||
    terrainFirstWord === 'mountains' ||
    terrainFirstWord === 'caves' ||
    terrainFirstWord === 'barren' ||
    terrainFirstWord === 'rocky canyons'
  ) {
    terrainImage = 'venus.svg';
  } else if (
    terrainFirstWord === 'gas giant' ||
    terrainFirstWord === 'toxic cloudsea'
  ) {
    terrainImage = 'saturnus.svg';
  } else if (
    terrainFirstWord === 'volcanoes' ||
    terrainFirstWord === 'airless asteroid'
  ) {
    terrainImage = 'moon.svg';
  } else if (terrainFirstWord === 'cityscape') {
    terrainImage = 'nebula.svg';
  } else {
    terrainImage = 'nebula.svg';
  }

  return terrainImage;
}

export default Planet;
