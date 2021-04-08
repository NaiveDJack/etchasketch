const table = document.querySelector('#etch-table')
const pixel = document.querySelectorAll('.pixel');


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

//TODO: hover changes colour to pixels
//HOW TO ADD A CLASS TO ALL PIXELS? toggle?