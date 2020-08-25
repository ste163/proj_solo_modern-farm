console.log("MAIN MODULE LOADED")

//Import all of the required helper functions
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants, harvestTable } from "./harvester.js";
import { usePlants } from "./field.js";
import { Catalog } from "./catalog.js";
import { TableLayout } from "./table.js";


plantSeeds(createPlan());
//the usePlants function below uses the array created
//from the plantSeeds function. Although we don't store that
//value in the main.js, it's still being saved in field.js.
//harvestPlants returns an array of all the harvested plants.
const harvested = harvestPlants(usePlants());
const harvestedTable = harvestTable(usePlants());
TableLayout(harvestedTable);
Catalog(harvested);