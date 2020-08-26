const arrProduce = [];
const arrTable = [];

//Counter for adding ID
let IDincrementer = 1;

//Counts are for table layout
let cornCount = 0;
let potatoCount = 0;
let asparagusCount = 0;
let soybeanCount = 0;
let wheatCount = 0;
let sunflowerCount = 0;


// harvesterMachine takes the looping and pushing
// to the produce array out of the switch statement
// to remove repeated code blocks.
const harvesterMachine = (plantObj) => {
    const grownPlant = plantObj.output;
    let counter = grownPlant
    plantObj.type === "Corn" ? counter = (counter / 2) : counter = counter;
    while (counter > 0) {
        let newPlant = {
            id: IDincrementer,
            type: plantObj.type,
            height: plantObj.height,
            output: plantObj.output,
            icon: plantObj.icon
        }    
        IDincrementer++;
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




//FUNCTION GOAL
//Return an array of objects
//Containing the produce name
//and its output to be used
//in a table layout.
export const harvestTable = (arrPlantsInTheField) => {
    for (const plant of arrPlantsInTheField) {
        switch(plant.type) {
            case "Corn":
                cornCount += (plant.output / 2);
            break;
            case "Asparagus":
                asparagusCount += plant.output;
            break;
            case "Soybean":
                soybeanCount += plant.output;
            break;
            case "Potato":
                potatoCount += plant.output 
            break;
            case "Wheat":
                wheatCount += plant.output;
            break;
            case "Sunflower":
                sunflowerCount += plant.output;
            break;
        }
    }

    //After adding to each count
    //Make new objects for the table layout
    const cornObj = {
        produce: "Corn",
        harvest: cornCount,
        icon: "&#127805"
    }
    const asparagusObj = {
        produce: "Asparagus",
        harvest: asparagusCount,
        icon: "&#127807"
    }
    const soybeanObj = {
        produce: "Soybeans",
        harvest: soybeanCount,
        icon: "&#127793"
    }
    const potatoObj = {
        produce: "Potatos",
        harvest: potatoCount,
        icon: "&#129364"
    }
    const wheatObj = {
        produce: "Wheat",
        harvest: wheatCount,
        icon: "&#127806"
    }
    const sunflowerObj = {
        produce: "Sunflowers",
        harvest: sunflowerCount,
        icon: "&#127803"
    }
    arrTable.push(sunflowerObj);
    arrTable.push(wheatObj);
    arrTable.push(potatoObj);
    arrTable.push(soybeanObj);
    arrTable.push(asparagusObj);
    arrTable.push(cornObj);
    return arrTable;
}


