let toBeSold = [];

export const toSellOrNotToSell = (potObject) => {
  if (potObject.cracked === true) {
    return potObject;
  }
  else {
    if (potObject.weight >= 6) {
      potObject.price = 40;
    }
    else {
      potObject.price = 20;
    }
    toBeSold.push(potObject);
  }
  return potObject;
}