export const getTitleColor = (index: any) => {
  const colorPattern = ["#FFA100", "#F7470F", "#E11162"];
  const patternLength = colorPattern.length;
  const cycleIndex =
    index < patternLength ? index : patternLength - (index % patternLength) - 1;

  return colorPattern[cycleIndex];
};
