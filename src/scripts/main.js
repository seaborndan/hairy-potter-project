// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2);
let bowl = makePottery("Bowl", 3, 1);
let cup = makePottery("Cup", 2, 3);
let jar = makePottery("Jar", 4, 3);
let tube = makePottery("Tube", 1, 4);


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000);
const firedBowl = firePottery(bowl, 1800);
const firedCup = firePottery(cup, 1900);
const firedJar = firePottery(jar, 2100);
const firedTube = firePottery(tube, 2300);

// Determine which ones should be sold, and their price
const priceFiredMug = toSellOrNotToSell(firedMug);
const priceFiredBowl = toSellOrNotToSell(firedBowl);
const priceFiredCup = toSellOrNotToSell(firedCup);
const priceFiredJar = toSellOrNotToSell(firedJar);
const priceFiredTube = toSellOrNotToSell(firedTube);
console.log(priceFiredMug);
console.log(priceFiredBowl);
console.log(priceFiredCup);
console.log(priceFiredJar);
console.log(priceFiredTube);

// Invoke the component function that renders the HTML list



