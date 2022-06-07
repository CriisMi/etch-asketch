const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {

    //create a row
    const row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < 16; j++) {

        //create the cells inside the row
        const cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
        cell.innerText = (i + 1);

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

