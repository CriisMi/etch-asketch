const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
        cell.innerText = (i + 1);
    }
    
    container.appendChild(row);
    
}