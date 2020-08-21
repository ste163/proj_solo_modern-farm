import { usePlants, addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";

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
                case 'Asparagus': //WORKING
                addPlant(createAsparagus());
                break;
                case 'Corn': //WORKING                
                addPlant(createCorn());
                break;
                case 'Potato':
                console.log("SWITCH Potato");
                addPlant(createPotato());
                break;
                case 'Wheat':
                console.log("SWITCH Wheat");
                break;
                case 'Soybean':
                console.log("SWITCH Soybean");
                break;
                case 'Sunflower':
                console.log("SWITCH Sunflower");
                break;
            }

            //If the name matches the switch, create the seed and push to array.
        }
        // console.log("ARRAY OF CREATED PLANTS", arrCreatedSeeds);
    }
        
        //DONE - Loop through the array.
            //DONE - Based on what the array's name is, match that with its corresponding createSeed function.
            //After the seed is created, add it to the array
            //Continue until everything has been created, then go to the next array
    //Once everything has been added, return the sliced array.
}