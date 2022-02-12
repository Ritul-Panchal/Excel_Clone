let rows = 100;
let cols = 26;
let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let addressBar = document.querySelector(".address-bar");
let cellsCont = document.querySelector(".cells-cont");
for (let i = 0; i < 100; i++){
    let addressCol = document.createElement("div");
    addressCol.innerText = i + 1;
    addressCol.setAttribute("class", "address-col");
    addressColCont.appendChild(addressCol);
}

for (let i = 0; i < cols; i++){
    let addressRow = document.createElement("div");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRow.setAttribute("class", "address-row");
    addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < rows; i++){
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for (let j = 0; j < cols; j++){
        cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("spellcheck", "false");
        // attributes for cell and storage identification
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell, i, j);
    }
    cellsCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay(cell, i, j){
    cell.addEventListener("click", (e) =>{
        let rowID = i + 1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`;
    })
}

// By defalut click on first cell
let firstCell = document.querySelector(".cell");
firstCell.click();
