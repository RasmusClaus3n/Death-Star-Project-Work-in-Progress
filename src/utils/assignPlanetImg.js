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

export { assignPlanetImg };
