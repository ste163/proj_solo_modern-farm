import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";

//PURPOSE OF FUNCTION
//This function takes a seed plan
//Makes a copy of that plan (probably not needed)
//Loops through the first array of that plan
//Loops into the inside arrays of that plan
//And creates seeds based on what those plans are.
//Once a seed is created, it is then added to the field using the
//addPlant function.

export const plantSeeds = (plan) => {
    //The plan is an array with multiple arrays inside
    console.log(plan); //WORKING
    
    //make a slice copy of the main array
    const planCopy = plan.slice();
    console.log(planCopy); //WORKING

    //Loop through the main array
    for (plan of planCopy) {
        console.log("ENTERING FIRST ARRAY", plan); //ITERATING OVER THE FIRST ARRAY AND RETURNING THE INSIDE ARRAYS
        let seed = plan;
        for (seed of plan) {
            console.log("ENTERING SECOND ARRAY", seed); //WORKING
            //switch statement for what the name is
            let seedInPlan = seed;
            switch (seedInPlan) {
                case 'Asparagus':
                    addPlant(createAsparagus());
                break;
                case 'Corn':               
                    addPlant(createCorn());
                break;
                case 'Potato':
                    addPlant(createPotato());
                break;
                case 'Wheat':
                    addPlant(createWheat());
                break;
                case 'Soybean':
                    addPlant(createSoybean());
                break;
                case 'Sunflower':
                    addPlant(createSunflower());
                break;
            }
        }
    }
}