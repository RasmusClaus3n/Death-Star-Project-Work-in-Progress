class Planet {
  constructor(
    id,
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
    films
  ) {
    this.id = id;
    this.name = name;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.population = population;
    this.residents = residents;
    this.films = films;
  }
}

export default Planet;
