console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

//Stores the objs into varaibles so we can use them
const yearlyPlan = createPlan();

console.log(plantSeeds(yearlyPlan));