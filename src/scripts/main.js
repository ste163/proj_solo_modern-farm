console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

//Stores the objs into varaibles so we can use them
const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();
const cornSeed = createCorn();
// const addedPlant = addPlant();
const usedPlants = usePlants();

// console.log(yearlyPlan);
// console.log(asparagusSeed);
// console.log(potatoSeed);
// console.log(soybeanSeed);
// console.log(sunflowerSeed);
// console.log(wheatSeed);
// console.log(cornSeed);

//Tests to see if field.js is working
console.log("ADD PLANT FUNCT", addPlant(createWheat()));
console.log("USE PLANTS FUNCT", usePlants());