

export const harvestPlants = (arrPlantsInField) => {

    const arrProduce = [];

    console.log("CURRENT PLANTS TO HARVEST", arrPlantsInField);
    debugger;

    for (const plant of arrPlantsInField) {

        switch(plant.type) {
            case "Corn":
                console.log("Corn");
                console.log(plant)
            break;
            case "Asparagus":
                console.log("Asparagus");
            break;
            case "Soybean":
                console.log("Soybean");
            break;
            case "Potato":
                console.log("Potato");
            break;
            case "Wheat":
                console.log("Wheat");
            break;
            case "Sunflower":
                console.log("Sunflower")
            break;
        }
        //if the plant.type === what ever
        // For each item, we need to
        // Find out what the object is
        // Decide what to do based on the object
        // We probably need to do another switch statement
        // console.log(plant.output);
    }

    //Function Goal
    //DONE - Add the parameter of our array of seeds in the field
    //DONE - Iterate through each plant, getting its output property value.
    //Based on that objects value, we add that many to a new array, called something like arrProduce
        //The EXCEPTION is corn. Only take half of that ouput, because we're "selling" half of it.
    //At the end, return the produce array

};