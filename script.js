// script.js
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create 256 squares (16x16)
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    
    // Add mouseover event listener to each square
    square.addEventListener('mouseover', function(e) {
        // Add colored class to create the trail effect
        e.target.classList.add('colored');
    });
    
    container.appendChild(square);
}
