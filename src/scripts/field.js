const arrField = [];

export const addPlant = (objSeed) => {
    //Check to see if objSeed is an object or an array
    //If it's an array, we might need to slice to make a copy
    //To break the objects from the array.
    if (Array.isArray(objSeed) === false) {
        // console.log("Not an array, so it is an object! Pushing to field.");
        arrField.push(objSeed);
    } else {
        // console.log("It's an array!")
        const seeds = objSeed;
        // Loops through the objSeed copy
        // it takes each object, saves that object to moveCorn,
        // then pushes moveCorn to the main array. If we don't save it to moveCorn
        // then it only saves the index value and not the object.
        for (const seed in seeds) {
              const moveCorn = seeds[seed];
              arrField.push(moveCorn);
        }
    }  
    console.log("CURRENT SEEDS IN FIELD", arrField);
}

export const usePlants = () => { return arrField };