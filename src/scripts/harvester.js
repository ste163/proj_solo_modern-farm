const arrProduce = [];

// harvesterMachine takes the looping and pushing
// to the produce array out of the switch statement
// to remove repeated code blocks.
const harvesterMachine = (plantObj) => {
    const grownPlant = plantObj.output;
    let counter = grownPlant
    plantObj.type === "Corn" ? counter = counter / 2 : counter = counter;
    while (counter > 0) {
        let newPlant = {
            type: plantObj.type,
            height: plantObj.height,
            output: plantObj.output
        }    
        arrProduce.push(newPlant);
        counter--;
    };
}

    //Function Goal
    //Use the parameter of our array of seeds in the field
    //Iterate through each plant, getting its output property value.
    //Based on that object's value, we add that many to a new array, called something like arrProduce
        //The EXCEPTION is corn. Only take half of that ouput, because we're "selling" half of it.
    //At the end, return the produce array

export const harvestPlants = (arrPlantsInField) => {

    // console.log("CURRENT PLANTS TO HARVEST", arrPlantsInField);

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
    // console.log("WE HARVESTED", arrProduce);
    return arrProduce;
};


