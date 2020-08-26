const arrField = [];

export const addPlant = (seedObj) => {
    //Check to see if seedObj is an object or an array
    //If it's an array, take the objects out of the array
    if (Array.isArray(seedObj) === false) {
        // console.log("Not an array, so it is an object! Pushing to field.");
        arrField.push(seedObj);
    } else {
        // console.log("It's an array!")
        seedObj.forEach(seed => {
            arrField.push(seed);
        })
    }  
    // console.log("CURRENT SEEDS IN FIELD", arrField);
}

export const usePlants = () => { return arrField };