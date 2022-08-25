// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 2);
let bowl = makePottery("Bowl", 3, 1);
let cup = makePottery("Cup", 2, 3);
let jar = makePottery("Jar", 4, 3);
let tube = makePottery("Tube", 1, 4);
const firedMug = firePottery(mug, 2000);
const firedBowl = firePottery(bowl, 1800);
const firedCup = firePottery(cup, 1900);
const firedJar = firePottery(jar, 2100);
const firedTube = firePottery(tube, 2300);
console.log(firedMug)
console.log(firedBowl)
console.log(firedCup)
console.log(firedJar)
console.log(firedTube)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



