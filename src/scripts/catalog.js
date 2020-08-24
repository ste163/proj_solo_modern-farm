 //FUNCTION GOAL
//DONE - accepts the harvested food array as input
//DONE - iterate the food array objects
//as you iterate, the main should have its inner HTML appended with a representation
//of the food items. USE BELOW CODE

export const Catalog = (arrHarvested) => {
    const containerHTML = document.querySelector(".container"); // To enter information into the DOM, you must store its selector.
    let representationHTML = ""; // You must then store the HTML strings in their own container

    for (const obj in arrHarvested) { //Looping through the array of objects, we append each item to our growing HTML list.
        const objHarvested = arrHarvested[obj];
        //Representation MUST have += or you'll overwrite and only have 1
        representationHTML += `
        <section class="plant">${objHarvested.type}</section>
        `;
    }

//To add to the DOM, you MUST have the += because we don't want to overwrite but append.
containerHTML.innerHTML += `
    ${representationHTML}
`
};



  