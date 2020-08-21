console.log("MAIN MODULE LOADED")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

//Stores the objs into varaibles so we can use them
const yearlyPlan = createPlan();

console.log(plantSeeds(yearlyPlan));
harvestPlants();