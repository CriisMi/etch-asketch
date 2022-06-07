const container = document.querySelector('.container');
const btn = document.querySelector('.button');

//create a grid
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
            cell.setAttribute('style', `height:${700/size}px; width: ${700/size}px;`);

            //add hover efect 
            cell.addEventListener('mouseover', () => {
                cell.className += ' hover';
            });
            cell.addEventListener('mouseout', () => {
                cell.classList.remove('hover');
            });

            //draw on mouse click
            cell.addEventListener('click', () => {
                cell.className += ' draw';
            });

        }
        container.appendChild(row);
    }
}

//initial 16x16 grid on screen
defineGrid(16);

//ask for user imput to reset grid
function resetGrid () {
    let size;
    do {
        size = prompt("Define the size of your canvas (must be smaller than 100)");
    } while (size < 1 || size > 100 || isNaN(size));
    
    defineGrid(size);
}


btn.addEventListener('click', resetGrid);
