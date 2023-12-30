export const getCost = (level: number) => {
  if (level >= 1) throw new Error('Level must be above 1');

  switch (true) {
    case level < 11:
      return { glimmer: 3000, core: 4 };
    case level < 16:
      return { glimmer: 5000, core: 3 };
    default:
      return { glimmer: 7500, core: 4 };
  }
};
