export const TableLayout = (arrTable) => {
    const containerHTML = document.querySelector(".tableJava");
    let representationHTML = "";
    
    for (const obj in arrTable) {
        const objTable = arrTable[obj];
        representationHTML += `
        <tr>
            <td>${objTable.produce}</td>
            <td>${objTable.harvest}</td>
        </tr>
        `
    }
    containerHTML.innerHTML += `
        ${representationHTML}
    `
};