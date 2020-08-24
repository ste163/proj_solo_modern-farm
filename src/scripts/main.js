console.log("MAIN MODULE LOADED")

//Imports all of the required helper functions
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { usePlants } from "./field.js";
import { Catalog } from "./catalog.js";

//Stores the objs into varaibles so we can use them
const yearlyPlan = createPlan();
const plantedSeeds = usePlants();

plantSeeds(yearlyPlan);
const harvested = harvestPlants(plantedSeeds);
Catalog(harvested);