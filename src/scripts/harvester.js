const arrProduce = [];

// harvesterMachine takes the looping and pushing
// to the produce array out of the switch statement
// to remove repeated code blocks.
const harvesterMachine = (objPlant) => {
    debugger;
    const grownPlant = objPlant.output;
    let counter = grownPlant
    if (objPlant.type === "Corn") {
        counter = counter / 2;
    } else {
        counter = counter;
    };
    while (counter > 0) {
        let newPlant = {
            type: objPlant.type,
            height: objPlant.height,
            output: objPlant.output
        }    
        arrProduce.push(newPlant);
        counter--;
    };
}


export const harvestPlants = (arrPlantsInField) => {

    console.log("CURRENT PLANTS TO HARVEST", arrPlantsInField);

    for (const plant of arrPlantsInField) {

        switch(plant.type) {
            case "Corn":
                harvesterMachine(plant);
            break;
            case "Asparagus":
                harvesterMachine(plant);
            break;
            case "Soybean":
                harvesterMachine(plant);
            break;
            case "Potato":
                harvesterMachine(plant);
            break;
            case "Wheat":
                harvesterMachine(plant);
            break;
            case "Sunflower":
                harvesterMachine(plant);
            break;
        }
    }
    console.log("WE PRODUCED/HARVESTED", arrProduce);

    //Function Goal
    //DONE - Add the parameter of our array of seeds in the field
    //DONE - Iterate through each plant, getting its output property value.
    //Based on that objects value, we add that many to a new array, called something like arrProduce
        //The EXCEPTION is corn. Only take half of that ouput, because we're "selling" half of it.
    //At the end, return the produce array

};


