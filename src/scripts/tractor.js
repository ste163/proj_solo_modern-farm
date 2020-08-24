import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";

//PURPOSE OF FUNCTION
//This function takes a seed plan
//Loops through the first array of that plan
//Loops into the inside arrays of that plan
//And creates seeds based on what those plans are.
//Once a seed is created, it is then added to the field using the
//addPlant function.

export const plantSeeds = (plan) => {
    //The plan is an array with multiple arrays inside
    //Loop through the main array
    for (const planItem of plan) {
        //Loop through the nested array
        for (const seed of planItem) {
            //switch statement for which seed to make
            switch (seed) {
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