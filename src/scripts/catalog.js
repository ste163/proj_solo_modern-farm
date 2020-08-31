//FUNCTION GOAL
//accept the harvested food array from harvester.js as input
//iterate the food array objects
    //as you iterate, the index should have its inner HTML
    //appended with a representation of the food items.

export const Catalog = (arrHarvested) => {
    const containerHTML = document.querySelector(".container"); // To enter information into the DOM, you must store its selector.
    containerHTML.innerHTML = `
            ${arrHarvested.map(item => {
                return `
                <section class="plant">${item.icon}</section>
                `
            }).join("")}`
};





  