export const getCostForLevelUp = (level: number) => {
  if (level < 1) throw new Error('Level must be above 1');

  switch (true) {
    case level < 11:
      return { glimmer: 3000, cores: 4 };
    case level < 16:
      return { glimmer: 5000, cores: 3 };
    default:
      return { glimmer: 7500, cores: 4 };
  }
};

export const calcCostTo30 = (currentLevel: number) => {
  const totalCost = { glimmer: 0, cores: 0 };

  for (let level = currentLevel; level < 30; level++) {
    const { glimmer, cores } = getCostForLevelUp(level);
    totalCost.glimmer += glimmer;
    totalCost.cores += cores;
  }

  return totalCost;
};

export const counts: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 0,
  28: 0,
  29: 0
};
