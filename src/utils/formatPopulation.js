const formatPopulation = (population) => {
  if (population >= 1000000000000) {
    return `${(population / 1000000000000).toLocaleString('en-US', {
      maximumFractionDigits: 1,
    })} trillion`;
  } else if (population >= 1000000000) {
    return `${(population / 1000000000).toLocaleString('en-US', {
      maximumFractionDigits: 1,
    })} billion`;
  } else if (population >= 1000000) {
    return `${(population / 1000000).toLocaleString('en-US', {
      maximumFractionDigits: 1,
    })} million`;
  } else if (population >= 1000) {
    return `${(population / 1000).toLocaleString('en-US', {
      maximumFractionDigits: 1,
    })} thousand`;
  } else if (population > 0) {
    return population.toLocaleString('en-US');
  } else {
    return 'Unknown';
  }
};

export { formatPopulation };
