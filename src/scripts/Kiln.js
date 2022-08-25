export const firePottery = (potObj, givenTemp) => {
  potObj.fired = true;
  if (givenTemp > 2200) {
    potObj.cracked = true;
  }
  else {
    potObj.cracked = false;
  }
  return potObj;
}