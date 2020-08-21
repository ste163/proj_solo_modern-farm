console.log("MAIN MODULE LOADED")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { usePlants } from "./field.js";

const plantedSeeds = usePlants();

//Stores the objs into varaibles so we can use them
const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);
harvestPlants(plantedSeeds);