import { usePlants } from "./field.js";

const plantedSeeds = usePlants();

export const harvestPlants = (arrPlants) => {
    console.log("CURRENT PLANTS TO HARVEST", plantedSeeds);
    
    //Function Goal
    //Add the parameter of our array of seeds in the field made during in the tractor.js (this will happen in main.js)
    //Iterate through each plant, getting its output property value.
    //Based on that objects value, we add that many to a new array, called something like arrProduce
        //The EXCEPTION is corn. Only take half of that ouput, because we're "selling" half of it.
    //At the end, return the produce array



    // function will return an array of seed objects
}