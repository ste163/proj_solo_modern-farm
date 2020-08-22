export const Catalog = (arrHarvested) => {
console.log("ENTERING CATALOG");
for (const obj in arrHarvested) {
    console.log("IN FOR LOOP");
    const objHarvested = arrHarvested[obj];
    console.log(`<section class="plant">${objHarvested.type}</section>`);
}

console.log("EXITING CATALOG");
};


    //FUNCTION GOAL
    //DONE - accepts the harvested food array as input
    //DONE - iterate the food array objects
    //as you iterate, the main should have its inner HTML appended with a representation
    //of the food items. USE BELOW CODE
  