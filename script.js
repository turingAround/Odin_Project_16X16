// Create container div
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create 256 squares (16x16)
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}
