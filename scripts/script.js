const table = document.querySelector('#etch-table'),
newTableBTN = document.querySelector('#new-table-btn'),
pixel = Array.from(document.querySelectorAll('.pixel'));


function createTable(size) {
    document.getElementById("etch-table").style.gridTemplateColumns =
        `repeat(${size}, 1fr)`;
    document.getElementById("etch-table").style.gridTemplateRows =
            `repeat(${size}, 1fr)`;
    
        for (i = size**2; i > 0; i--) {
        let square = document.createElement('DIV');
        square.classList.add('pixel')
        table.appendChild(square);
    }
}

function clearTable() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    //prompt user for a number
    //createTable(number, number)
}

function newTable() {
    clearTable();
    createTable(prompt('Input etch-a-sketch size', 16));
}

table.onmouseover = function(event) {
    let target = event.target;

    if (target.tagName != 'DIV' || target.id == "etch-table") return;

    sketch(target)
}

function sketch(div) {
    let oldOpa = Number(div.style.opacity);
    if (oldOpa < 1) {
        oldOpa += 0.1;
    }  
    div.style.opacity = `${oldOpa}`;
}

newTableBTN.addEventListener('click', newTable);