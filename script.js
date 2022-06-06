const container = document.querySelector('.container');

for (i = 0; i < 16*16; i++) {
    const cell = document.createElement('div');
    cell.innerText = (i + 1);
   
    container.appendChild(cell);
}
