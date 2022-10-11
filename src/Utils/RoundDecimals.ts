const roundDecimals = <T extends number>(value: number, decimalsCount: number) => {
  const enhancer = Math.pow(10, decimalsCount);

  return Math.round(value * enhancer) / enhancer;
};

export { roundDecimals };
