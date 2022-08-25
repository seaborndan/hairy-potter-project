let potKey = 1;

export const makePottery = (shapeType, weightGiven, heightGiven) => {
  let newPot = {
    id: potKey,
    shape: shapeType,
    weight: weightGiven,
    height: heightGiven 
  }
  potKey++;
  return newPot;
}