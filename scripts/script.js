const table = document.querySelector('#etch-table')
const pixel = Array.from(document.querySelectorAll('.pixel'));


function createTable(rowLength, columnLength) {
    document.getElementById("etch-table").style.gridTemplateColumns =
            'repeat(' + columnLength +', 1fr)';
    document.getElementById("etch-table").style.gridTemplateRows =
            'repeat(' + rowLength +', 1fr)'
    
        for (i = rowLength*columnLength; i > 0; i--) {
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

//TODO: hover changes colour to pixels
//HOW TO ADD A CLASS TO ALL PIXELS? toggle?
table.onmouseover = function(event) {
    let target = event.target;

    if (target.tagName != 'DIV') return;

    sketch(target)
}

function sketch(div) {
    div.classList.add('sketched'); 
    /* this work but try direct js update
    let opacity = parseInt(div.style);
    if (opacity < 100) {
        opacity += 10
    }
    div.style.color */
}