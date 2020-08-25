//FUNCTION GOAL
//accept the harvested food array from harvester.js as input
//iterate the food array objects
    //as you iterate, the index should have its inner HTML
    //appended with a representation of the food items.

export const Catalog = (arrHarvested) => {
    const containerHTML = document.querySelector(".container"); // To enter information into the DOM, you must store its selector.
    let representationHTML = ""; // You must then store the HTML strings in their own container

    for (const obj in arrHarvested) { //Looping through the array of objects, we append each item to our growing HTML list.
        const objHarvested = arrHarvested[obj];
        //Representation MUST have += or you'll overwrite and only have 1 item
        representationHTML += `
        <section class="plant">${objHarvested.type}</section>
        `;
    }

//To add to the DOM, you MUST have the += for the same reason as above
containerHTML.innerHTML += `
    ${representationHTML}
`
};





  