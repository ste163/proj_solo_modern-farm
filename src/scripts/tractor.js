export const plantSeeds = (plan) => {
    //The plan is an array with multiple arrays inside
    console.log(plan); //WORKING
    //make a slice copy of the main array
    const planCopy = plan.slice();
    console.log(planCopy); //WORKING
    //Loop through the main array
    for (plan of planCopy) {
        console.log(plan); //ITERATING OVER THE FIRST ARRAY AND RETURNING THE INSIDE ARRAYS
        let seed = plan;
        for (seed of plan) {
            console.log(seed);
        }
    }
        
        //Loop through the array of each object.
            //Based on what the object's TYPE is, match that with its corresponding
            //createSeed function.
            //After the seed is created, add it to the array
            //Continue until everything has been created, then go to the next array
    //Once everything has been added, return the sliced array.

}