const container = document.querySelector('.container');
const btn = document.querySelector('.button');

function defineGrid (size) {

    //delete the old grid;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    //create new grid
    for (i = 0; i < size; i++) {
        
        //create a row
        const row = document.createElement('div');
        row.className = 'row';
        for (j = 0; j < size; j++) {

            //create the cells inside the row
            const cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
            cell.innerText = (i + 1);
            cell.setAttribute('style', `height:${700/size}px; width: ${700/size}px;`);

            //add hover efect 
            cell.addEventListener('mouseover', () => {
                cell.className += ' hover';
            });
            cell.addEventListener('mouseout', () => {
                cell.className = 'cell';
            });
        }
        container.appendChild(row);
    }
}

defineGrid(16);

function resetGrid () {
    let size = prompt("Define the size of your canvas (must be smaller than 100)");
    defineGrid(size);
}

let num = btn.addEventListener('click', resetGrid);
