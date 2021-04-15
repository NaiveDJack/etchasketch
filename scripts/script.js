const table = document.querySelector('#etch-table'),
newTableBTN = document.querySelector('#new-table-btn'),
pixel = Array.from(document.querySelectorAll('.pixel')),
sizer = document.querySelector('#size-picker'),
eraser = document.querySelector('#eraser');

function createTable(size) {
    document.querySelector("#etch-table").style.gridTemplateColumns =
            `repeat(${size}, 1fr)`;
    document.querySelector("#etch-table").style.gridTemplateRows =
            `repeat(${size}, 1fr)`;
    
        for (i = size**2; i > 0; i--) {
        let square = document.createElement('DIV');
        square.classList.add('pixel')
        table.appendChild(square);
    }
    document.querySelector("#eraser").max = `${size}`;
    document.querySelector("#eraser").value = `${size/2}`;
}

function clearTable() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function newTable() {
    clearTable();

    let newSize = document.querySelector("#size-picker").value
    createTable(newSize);
}

function sketch(div) {
    let oldOpa = Number(div.style.opacity);
    if (oldOpa < 1) {
        oldOpa += 0.1;
    }  
    div.style.opacity = `${oldOpa}`;
}

table.onmouseover = function(event) {
    let target = event.target;

    if (target.tagName != 'DIV' || target.id == "etch-table") return;

    sketch(target)
}

newTableBTN.addEventListener('click', newTable);
createTable(16);