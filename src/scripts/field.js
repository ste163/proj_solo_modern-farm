const arrField = [];

export const addPlant = (objSeed) => {
    //Check to see if objSeed is an object or an array
    //If it's an array, we might need to slice it.
    //To break the objects from the array.
    if (Array.isArray(objSeed) === false) {
        console.log("Not an array, so it is an object! Pushing to field.");
        arrField.push(objSeed);
    } else {
        console.log("It's an array!")
        const seeds = objSeed.slice();
        // Loops through the objSeed copy
        // it takes each object, saves that object to moveCorn,
        // then pushes moveCorn to the main array.
        for (const seed in seeds) {
              const moveCorn = seeds[seed];
              arrField.push(moveCorn);
        }
    }  
}

export const usePlants = () => {
    let arrFieldCopy = arrField;
    return arrFieldCopy
};