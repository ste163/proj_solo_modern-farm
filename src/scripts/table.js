export const TableLayout = (arrTable) => {
    const containerHTML = document.querySelector(".tableJava");
    containerHTML.innerHTML = `${arrTable.map(item => {
        return `
            <tr>
                <td>${item.produce}</td>
                <td>${item.icon}</td>
                <td>${item.harvest}</td>
            </tr>`
        }).join("")}`
};